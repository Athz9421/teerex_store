import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
export default function filter(props) {
  return (
    <div
      sx={{
        position: "fixed",
      }}
    >
      <Stack
        spacing={1}
        direction={"column"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Stack spacing={1} direction={"column"}>
            <h3>Color</h3>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Color"
                value={"Red"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Red</label>{" "}
            </Stack>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Color"
                value={"Blue"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Blue</label>{" "}
            </Stack>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Color"
                value={"Green"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Green</label>{" "}
            </Stack>
          </Stack>
        </Box>

        <Box>
          <Stack spacing={1} direction={"column"}>
            <h3>Gender</h3>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Gender"
                value={"Men"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Men</label>{" "}
            </Stack>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Gender"
                value={"Women"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Women</label>{" "}
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={1} direction={"column"}>
            <h3>Price</h3>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Price"
                value={"0-250"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">0-250</label>{" "}
            </Stack>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Price"
                value={"251-450"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">251-450</label>{" "}
            </Stack>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Price"
                value={"450-500"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">450</label>{" "}
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={1} direction={"column"}>
            <h3>Types</h3>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Types"
                value={"Polo"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Polo</label>{" "}
            </Stack>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Types"
                value={"Hoodie"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Hudies</label>{" "}
            </Stack>
            <Stack direction={"row"}>
              <input
                type="checkbox"
                name="Types"
                value={"Basic"}
                onChange={props.changeCategory}
              />{" "}
              <label htmlFor="">Basic</label>{" "}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
}
