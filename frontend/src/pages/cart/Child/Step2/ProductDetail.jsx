import React from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { products } from "../ProductDataBase";
import "../../cart.css";
import Divider from "@mui/material/Divider";

function ProductDetail(prop) {
  // console.log(prop);
  const row = prop.productinfo;
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
          <img src={row.image} alt="Logo" />
        </Grid>
        <Grid container item xs={8}>
          <Grid container item xs={12}>
            <Grid container item xs={12}>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontFamily="" variant="h6" gutterBottom>
                  {row.name}
                </Typography>
                <Typography fontFamily="" variant="h5">
                  ${row.quantity*row.price}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontFamily="" variant="body1" gutterBottom>
                  Color: {row.color}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontFamily="" variant="body1" gutterBottom>
                  Quantity: {row.quantity}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetail;
