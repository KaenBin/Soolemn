import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function Step3(prop) {
  return (
    <div>
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          borderRadius: 2,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography fontFamily="" variant="h6" gutterBottom>
                Thank you!
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography fontFamily="" variant="h4" gutterBottom>
                Your order has been received
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{ display: "flex", justifyContent: "center", marginTop:"20px" }}
            >
              <Box sx={{ width: "60%" }}>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      Order Code
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      #0123_45678
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      Date
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      December 12, 2023
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      Total
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      ${prop.total}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      Payment Method
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontFamily="" variant="body1" gutterBottom>
                      {prop.method}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Step3;
