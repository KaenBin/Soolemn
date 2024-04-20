import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import ContactInfo from "./ContactInfo";
import ShippAddress from "./ShippAddress";
import PaymentMethod from "./PaymentMethod";
import Button from "@mui/material/Button";

function FullForm(prop) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ContactInfo
            handleFirstName={prop.handleFirstName}
            handleLastName={prop.handleLastName}
            handleEmail={prop.handleEmail}
            handlePhoneNum={prop.handlePhoneNum}
            contactInfor={prop.contactInfor}
            handleShipping={prop.handleShipping}
          />
        </Grid>
        <Grid item xs={12}>
          <ShippAddress
            shippingAddress={prop.shippingAddress}
            handleShipping={prop.handleShipping}
          />
        </Grid>
        <Grid item xs={12}>
          <PaymentMethod
            payment={prop.payment}
            handlePayment={prop.handlePayment}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              width: "99%",
              height: "50px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
            }}
            disabled={prop.productsList?.length > 0 ? false : true}
            onClick={prop.handleNext}
          >
            Place Order
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default FullForm;
