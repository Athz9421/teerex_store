import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Cart.css";
import Divider from "@mui/material/Divider";
import CartCard from "./CartCard";


export default function Cart() {
  let [CartData, setCartData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const getItemFromLocalStorage = () => {
    let cartData = JSON.parse(localStorage.getItem("cart"));

    setCartData(cartData);
    return cartData;
  };
  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  const handalDelete = (id) => {
    const existingCartData = JSON.parse(localStorage.getItem("cart"));
    const updatedCartData = existingCartData.filter((ele) => {
      return ele.id !== id;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  const handalQty = (newQuantity, id) => {
    const updatedCartData = CartData.map((ele) =>
      ele.id === id ? { ...ele, qty: newQuantity } : ele
    );

    localStorage.setItem("cart", JSON.stringify(updatedCartData));

    setCartData(updatedCartData);
  };

  useEffect(() => {
    let totalCost = 0;
    CartData.forEach((ele) => {
      totalCost += (ele.qty || 1) * ele.price;
    });
    setTotalCost(totalCost);
  }, [CartData]);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" className="main-heading">
          Shopping Cart
        </Typography>
        {CartData.map((ele) => {
          return (
            <CartCard
              key={ele.id}
              name={ele.name}
              id={ele.id}
              img={ele.img}
              price={ele.price}
              handalDelete={handalDelete}
              handalQty={handalQty}
              qty={ele.qty}
            />
          );
        })}

<Box mt={3}>
        <Divider />
        <Typography variant="h5" align="right" mt={2}>
          Total cost: ${totalCost.toFixed(2)} {/* Using toFixed(2) to display 2 decimal places */}
        </Typography>
      </Box>
      </Box>
    </>
  );
}
