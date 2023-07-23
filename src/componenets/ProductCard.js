import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductCard(props) {
  const addToLocalStorage = (product) => {
    const existingCartData = localStorage.getItem("cart");
    let cartData = [];
    if (existingCartData) {
      cartData = JSON.parse(existingCartData);
    }
    cartData.push(product);
    localStorage.setItem("cart", JSON.stringify(cartData));
    console.log(cartData);
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const priceStyle = {
    marginRight: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    padding: "10px",
  };
  const cardStyle = {
    width: "300px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <Card style={cardStyle} key={props.id}>
        <CardMedia
          component="img"
          alt="Product Image"
          image={props.img}
          height="288px"
        />
        <div
          style={{
            textAlign: "left",
            paddingLeft: "10px",
            marginBottom: "-17px",
          }}
        >
          {" "}
          <h4 style={{ marginBottom: "-10px" }}>
            {props.name} for {props.gender}
          </h4>
          <p>{props.color}</p>{" "}
        </div>

        <CardContent style={contentStyle}>
          <Typography variant="h6" gutterBottom>
            ${props.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              addToLocalStorage({
                id: props.id,
                name: props.name,
                img: props.img,
                price: props.price,
                qty: 1,
              })
            }
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
