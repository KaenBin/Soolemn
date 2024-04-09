import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import ContactInfo from "./ContactInfo";

function FullForm() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ContactInfo/>
        </Grid>
        <Grid item xs={12}>
          shipp address
        </Grid>
        <Grid item xs={12}>
          payment method
        </Grid>
      </Grid>
    </div>
  );
}

export default FullForm;
