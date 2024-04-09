import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import TableCart from "./Step1/TableCart";
import CartSummary from "./Step1/CartSummary";


function Step1() {
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <TableCart/>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{ width: "90%", border: "1px solid black", borderRadius: 2 }}
            >
                <CartSummary/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Step1;
