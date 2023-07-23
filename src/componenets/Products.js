import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import { TextField, Button } from "@mui/material";
import Filter from "./Filter";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, IconButton } from "@mui/material";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [searchQueryArray, setsearchQueryArray] = useState([]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    },
    filterContainer: {
      flex: "0 0 250px", 
      position: "sticky",
      top: 0, 
      overflowY: "auto",
      paddingRight: "10px", 
    },
    contentContainer: {
      flex: "1 1 auto", 
      padding: "10px", 
      overflowY: "auto", 
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const data = await response.json();
      setProductData(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filterByColor = (products, color) => {
    if (!color) {
      return products;
    } else {
      return products.filter((product) => product.color === color);
    }
  };

  const filterByGender = (products, gender) => {
    if (!gender) {
      return products;
    } else {
      return products.filter((product) => product.gender === gender);
    }
  };

  const filterByPrice = (products, maxPrice) => {
    const priceArray = maxPrice.split("-");
    if (!maxPrice) {
      return products;
    } else {
      return products.filter(
        (product) =>
          product.price <= priceArray[1] && product.price >= priceArray[0]
      );
    }
  };

  const filterByType = (products, type) => {
    if (!type) {
      return products;
    } else {
      return products.filter((product) => product.type === type);
    }
  };

  const applyFilters = (products, filters, searchQueryArray) => {
    let filteredProducts = products;

    if (filters.length > 0) {
      filters.forEach((filter) => {
        if (filter.name === "Color") {
          filteredProducts = filterByColor(filteredProducts, filter.value);
        } else if (filter.name === "Gender") {
          filteredProducts = filterByGender(filteredProducts, filter.value);
        } else if (filter.name === "Price") {
          filteredProducts = filterByPrice(filteredProducts, filter.value);
        } else if (filter.name === "Types") {
          filteredProducts = filterByType(filteredProducts, filter.value);
        }
      });
    }
    if (searchQueryArray.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return searchQueryArray.every((query) => {
          return (
            (typeof product.name === "string" && product.name.toLowerCase().includes(query.toLowerCase())) ||
            (typeof product.type === "string" && product.type.toLowerCase().includes(query.toLowerCase())) ||
            (typeof product.price === "number" && product.price.toString().includes(query)) ||
            (typeof product.color === "string" && product.color.toLowerCase().includes(query.toLowerCase())) ||
            (typeof product.gender === "string" && product.gender.toLowerCase().includes(query.toLowerCase()))
          );
        });
      });
    }
    return filteredProducts;
  };

  const changeCategory = (e) => {
    const selectedCategory = e.target.value;
    const categoryName = e.target.name;
    const isChecked = e.target.checked;

    setCategory((prevCategory) => {
      const updatedCategory = prevCategory.filter(
        (cat) => cat.name !== categoryName
      );
      if (isChecked) {
        return [
          ...updatedCategory,
          { name: categoryName, value: selectedCategory },
        ];
      }

      return updatedCategory;
    });
  };

  const handleSearch = (e) => {
    let value = e.target.value.split(" ");
    setsearchQuery(e.target.value);
    setsearchQueryArray(value);
  };
  useEffect(() => {
    const updatedProducts = applyFilters(
      productData,
      category,
      searchQueryArray
    );
    setFilteredProducts(updatedProducts);
  }, [category, productData, searchQuery]);

  return (
    <div style={{ height: "100vh" }}>
      <Box style={{ padding: "10px" }}>
        <TextField
          label="Search"
          placeholder="Enter search query"
          variant="outlined"
          size="medium" 
          sx={{ width: "300px" }} 
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
    
            <Grid item xs={12}>
              <Box style={{
          position: 'sticky',
          top: '80px', 
          height: 'calc(100vh - 80px)',
          overflowY: 'auto',
          padding: '10px',
          backgroundColor: 'white',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
          zIndex: 999, 
          justifyContent: "center",
        
        }} >
                <Filter changeCategory={changeCategory} />
              </Box>
              
            </Grid>
         
        </Grid>
        <Grid item xs={12} md={9} sm={4}>
          <Grid container spacing={2}>
            {filteredProducts.map((ele) => (
              <Grid item xs={12} md={4} sm={6} key={ele.id}>
                <ProductCard
                  img={ele.imageURL}
                  price={ele.price}
                  key={ele.id}
                  id={ele.id}
                  name={ele.name}
                  color={ele.color}
                  gender={ele.gender}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
