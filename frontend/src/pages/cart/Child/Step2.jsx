import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import FullForm from "./Step2/FullForm";
import OrderSum from "./Step2/OrderSum";

function Step2(prop) {
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <FullForm
            handleFirstName={prop.handleFirstName}
            contactInfor={prop.contactInfor}
            handleLastName={prop.handleLastName}
            handleEmail={prop.handleEmail}
            handlePhoneNum={prop.handlePhoneNum}
            shippingAddress={prop.shippingAddress}
            handleShipping={prop.handleShipping}
            payment={prop.payment}
            handlePayment={prop.handlePayment}
            handleNext={prop.handleNext}
            productsList={prop.productsList}
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "90%",
                border: "1px solid black",
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
              }}
            >
              <OrderSum
                productsList={prop.productsList}
                setProducts={prop.setProducts}
                total={prop.total}
                subtotal={prop.subtotal}
                value={prop.value}
                setValue={prop.setValue}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Step2;
