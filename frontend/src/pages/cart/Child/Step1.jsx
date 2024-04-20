import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import TableCart from "./Step1/TableCart";
import CartSummary from "./Step1/CartSummary";
import { products } from "./ProductDataBase";

function Step1(prop) {
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <TableCart
            productsList={prop.productsList}
            setProducts={prop.setProducts}
            handleDeleteFromCart={prop.handleDeleteFromCart}
            handleDeleteAll={prop.handleDeleteAll}
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{ width: "90%", border: "1px solid black", borderRadius: 2 }}
            >
              <CartSummary
                productsList={prop.productsList}
                total={prop.total}
                subtotal={prop.subtotal}
                value={prop.value}
                setValue={prop.setValue}
                handleNext={prop.handleNext}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Step1;
