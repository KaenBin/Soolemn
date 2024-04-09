import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import ContactInfo from "./ContactInfo";
import ShippAddress from "./ShippAddress";
import PaymentMethod from "./PaymentMethod";

function FullForm() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ContactInfo/>
        </Grid>
        <Grid item xs={12}>
          <ShippAddress/>
        </Grid>
        <Grid item xs={12}>
          <PaymentMethod/>
        </Grid>
      </Grid>
    </div>
  );
}

export default FullForm;
