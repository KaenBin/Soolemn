import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SelectCountry from "./SelectCountry";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
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

function ShippAddress(prop) {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          border: "1px solid black",
          borderRadius: 1,
          marginBottom: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
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
                Shipping Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ marginLeft: "1%" }}
                >
                  <Typography fontFamily="" variant="h6" gutterBottom>
                    Street Address
                  </Typography>
                </InputLabel>
                <BootstrapInput
                  defaultValue={prop.shippingAddress.street}
                  id="bootstrap-input"
                  onChange={(e) => prop.handleShipping(e, "street")}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <SelectCountry
                shippingAddress={prop.shippingAddress}
                handleShipping={prop.handleShipping}
              />
            </Grid>
            <Grid item xs={12}>
              {" "}
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{ marginLeft: "1%" }}
                >
                  <Typography fontFamily="" variant="h6" gutterBottom>
                    Town / City
                  </Typography>
                </InputLabel>
                <BootstrapInput
                  defaultValue={prop.shippingAddress.town}
                  id="bootstrap-input"
                  onChange={(e) => prop.handleShipping(e, "town")}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ marginLeft: "2%" }}
                  >
                    <Typography fontFamily="" variant="h6" gutterBottom>
                      State
                    </Typography>
                  </InputLabel>
                  <BootstrapInput defaultValue={prop.shippingAddress.state} id="bootstrap-input" onChange={(e) => prop.handleShipping(e, "state")}/>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ marginLeft: "2%" }}
                  >
                    <Typography fontFamily="" variant="h6" gutterBottom>
                      Zip Code
                    </Typography>
                  </InputLabel>
                  <BootstrapInput defaultValue={prop.shippingAddress.zip} id="bootstrap-input" onChange={(e) => prop.handleShipping(e, "zip")}/>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default ShippAddress;
