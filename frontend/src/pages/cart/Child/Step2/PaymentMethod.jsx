import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";

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

function PaymentMethod(prop) {

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          border: "1px solid black",
          borderRadius: 1,
          marginBottom: "20px",
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)'
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
                Payment Method
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={prop.payment.method}
                  onChange={(e) => prop.handlePayment(e, "method")}
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
                        backgroundColor: "lightgray",
                      },
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <FormControlLabel
                          value="Pay By Cash"
                          control={<Radio />}
                          label="Pay By Cash"
                          sx={{ marginLeft: "5px" }}
                        />
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
                        backgroundColor: "lightgray",
                      },
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <FormControlLabel
                          value="Pay By Card Credit"
                          control={<Radio />}
                          label="Pay By Card Credit"
                          sx={{ marginLeft: "5px" }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </RadioGroup>
              </FormControl>
            </Grid>
            {prop.payment.method == "Pay By Card Credit" ? (
              <>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs={12}>
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                      <InputLabel
                        shrink
                        htmlFor="bootstrap-input"
                        sx={{ marginLeft: "1%" }}
                      >
                        <Typography fontFamily="" variant="h6" gutterBottom>
                          Card Number
                        </Typography>
                      </InputLabel>
                      <BootstrapInput defaultValue={prop.payment.cardNum} id="bootstrap-input" onChange={(e) => prop.handlePayment(e, "cardNum")}/>
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
                            Expiration Date
                          </Typography>
                        </InputLabel>
                        <BootstrapInput defaultValue={prop.payment.expDate} id="bootstrap-input" onChange={(e) => prop.handlePayment(e, "expDate")}/>
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
                            CVC
                          </Typography>
                        </InputLabel>
                        <BootstrapInput defaultValue={prop.payment.cvc} id="bootstrap-input" onChange={(e) => prop.handlePayment(e, "cvc")}/>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              ""
            )}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default PaymentMethod;
