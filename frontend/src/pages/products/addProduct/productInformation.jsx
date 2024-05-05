import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import { ColorButton } from "@/components/styled";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function ProductInformation(props) {
  return (
    <Box
      p={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      borderRadius={3}
    >
      <Stack display="flex" direction="row" gap={2}>
        <FormControl sx={{ width: "50ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            PRODUCT NAME
          </FormHelperText>
          <OutlinedInput
            sx={{ fontSize: "18px" }}
            value={props.productData.productName}
            onChange={(event) => {
              props.handleUpdateData("productName", event.target.value);
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "productName",
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "50ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            CATEGORY
          </FormHelperText>
          <OutlinedInput
            sx={{ fontSize: "18px" }}
            value={props.productData.category}
            onChange={(event) => {
              props.handleUpdateData("category", event.target.value);
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "category",
            }}
          />
        </FormControl>
      </Stack>
      <Stack display="flex" direction="row" gap={2}>
        <FormControl sx={{ width: "50ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            PRICE
          </FormHelperText>
          <OutlinedInput
            sx={{ fontSize: "18px" }}
            value={props.productData.price}
            onChange={(event) => {
              props.handleUpdateData("price", event.target.value);
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "price",
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "50ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            QUANTITY
          </FormHelperText>
          <OutlinedInput
            sx={{ fontSize: "18px" }}
            value={props.productData.quantity}
            onChange={(event) => {
              props.handleUpdateData("quantity", event.target.value);
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "quantity",
            }}
          />
        </FormControl>
      </Stack>
      <Stack display="flex" direction="row" gap={2}>
        <FormControl sx={{ width: "50ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
            value={props.productData.brand}
            onChange={(event) => {
              props.handleUpdateData("brand", event.target.value);
            }}
          >
            BRAND
          </FormHelperText>
          <OutlinedInput
            sx={{ fontSize: "18px" }}
            value={props.productData.origin}
            onChange={(event) => {
              props.handleUpdateData("origin", event.target.value);
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "brand",
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "50ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            ORIGIN
          </FormHelperText>
          <OutlinedInput
            sx={{ fontSize: "18px" }}
            value={props.productData.origin}
            onChange={(event) => {
              props.handleUpdateData("origin", event.target.value);
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "origin",
            }}
          />
        </FormControl>
      </Stack>
      <FormControl sx={{ width: "103ch" }} variant="outlined">
        <FormHelperText
          id="outlined-weight-helper-text"
          sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
        >
          DESCRIPTION
        </FormHelperText>
        <OutlinedInput
          sx={{ fontSize: "18px" }}
          value={props.productData.description}
          onChange={(event) => {
            props.handleUpdateData("description", event.target.value);
          }}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "brand",
          }}
          multiline
          minRows={10}
          maxRows={20}
        />
      </FormControl>
      <ColorButton
        onClick={props.handleSubmit}
        variant="contained"
        style={{
          height: "50px",
          width: "110ch",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        Submit
      </ColorButton>
    </Box>
  );
}
