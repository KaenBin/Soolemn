import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ProductDetail from "./ProductDetail";
import { products } from "../ProductDataBase";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import DiscountIcon from "@mui/icons-material/Discount";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    // marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    margin: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function OrderSum(props) {
  return (
    <div>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography fontFamily="" variant="h5" gutterBottom>
              Order Summary
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            {props.productsList?.map((product, index) => (
              <Grid item xs={12} key={index} sx={{ marginTop: "10px" }}>
                <ProductDetail productinfo={product} />
              </Grid>
            ))}
          </Grid>
          <Grid container item xs={12} spacing={2} sx={{ marginTop: "20px" }}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ marginLeft: "1%" }}
                ></InputLabel>
                <BootstrapInput defaultValue="voucher" id="bootstrap-input" />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="contained">Voucher</Button>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DiscountIcon />
                  <Typography fontFamily="" variant="h6">
                    Freeship
                  </Typography>
                </Box>
                <Typography fontFamily="" variant="h6">
                  -$9.99
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Typography fontFamily="" variant="h6">
                  Shipping
                </Typography>

                <Typography fontFamily="" variant="h6">
                  Free
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Typography fontFamily="" variant="h6">
                  Subtotal
                </Typography>

                <Typography fontFamily="" variant="h6">
                  ${props.subtotal}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Typography fontFamily="" variant="h5">
                  Total
                </Typography>

                <Typography fontFamily="" variant="h5">
                  ${props.total}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OrderSum;
