import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";

function CartSummary(prop) {
  const handleChange = (event) => {
    prop.setValue(event.target.value);
  };

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
          {/* //////////////////////////////////////////////////////////// */}
          <Grid item xs={12}>
            <Typography fontFamily="" variant="h5" gutterBottom>
              Cart Summary
            </Typography>
          </Grid>
          {/* //////////////////////////////////////////////////////////// */}
          <Grid item xs={12}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ marginBottom: 1 }}
              >
                Shipping
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={prop.value}
                onChange={handleChange}
              >
                <Box
                  component="label"
                  sx={{
                    width: "100%",
                    border: "1px black solid",
                    borderRadius: 1,
                    marginBottom: 1,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "lightgray", // Apply hover effect
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={8}>
                      <FormControlLabel
                        value="Normal Shipping"
                        control={<Radio />}
                        label="Normal Shipping"
                        sx={{ marginLeft: "5px" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography fontFamily="" variant="body1">
                        +$9.99
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  component="label"
                  sx={{
                    width: "100%",
                    border: "1px black solid",
                    borderRadius: 1,
                    marginBottom: 1,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "lightgray", // Apply hover effect
                    },
                  }}
                  value="Express Shipping"
                >
                  <Grid container>
                    <Grid item xs={8}>
                      <FormControlLabel
                        value="Express Shipping"
                        control={<Radio />}
                        label="Express Shipping"
                        sx={{ marginLeft: "5px" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography fontFamily="" variant="body1">
                        +$14.99
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  component="label"
                  sx={{
                    width: "100%",
                    border: "1px black solid",
                    borderRadius: 1,
                    marginBottom: 1,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "lightgray", // Apply hover effect
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={8}>
                      <FormControlLabel
                        value="Pick Up"
                        control={<Radio />}
                        label="Pick Up"
                        sx={{ marginLeft: "5px" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography fontFamily="" variant="body1">
                        $0.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* //////////////////////////////////////////////////////////// */}
          <Grid item xs={12} sx={{ marginTop: "10px" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography fontFamily="" variant="h5">
                Subtotal
              </Typography>
              <Typography fontFamily="" variant="h5">
                ${prop.subtotal}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>
          {/* //////////////////////////////////////////////////////////// */}
          <Grid item xs={12}>
            <Divider />
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
                ${prop.total}
              </Typography>
            </Box>
          </Grid>
          {/* //////////////////////////////////////////////////////////// */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
              }}
              disabled={prop.productsList?.length > 0 ? false : true}
              onClick={prop.handleNext}
            >
              CheckOut
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CartSummary;
