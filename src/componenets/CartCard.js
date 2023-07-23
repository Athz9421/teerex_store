import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import "./Cart.css";
import { Button } from "@mui/material";

export default function CartCard(props) {
  const { id, name, img, price, handalDelete } = props;

  const handleQtyChange = (e) => {
    const newQuantity = e.target.value;
    props.handalQty(newQuantity, id);
  };
  return (
    <Box className="cart-item" key={props.id}>
      <Box className="cart-item-image">
        <img src={props.img} alt="Product" width="100%" height="100%" />
      </Box>
      <Box className="cart-item-info">
        <Box padding="10px">
          <Typography variant="h6" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.price}
          </Typography>
        </Box>
        <Box padding="10px">
          <FormControl
            variant="outlined"
            size="small"
            className="quantity-select"
          >
            <Select
              value={props.qty || 1}
              onChange={handleQtyChange}
              label="Quantity"
              className="quantity-select"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box padding="30px">
          <Button
            variant="contained"
            onClick={() => props.handalDelete(props.id)}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
