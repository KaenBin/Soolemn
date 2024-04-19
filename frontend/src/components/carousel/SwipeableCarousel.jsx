import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const SwipeableCarousel = (props) => (
  <SwipeableViews>
    <Grid
      container
      width="100%"
      justifyContent="start"
      display="flex"
      pt="5vh"
      // padding="10px"
    >
      {props.images
        ? props.images
            .slice(
              props.maxSteps < 3
                ? 0
                : props.maxSteps - props.activeStep < 3
                ? props.maxSteps - 3
                : props.activeStep <= 1
                ? 0
                : props.activeStep,
              props.maxSteps - props.activeStep < 3
                ? props.maxSteps
                : props.activeStep <= 1
                ? 3
                : props.activeStep + 3
            )
            .map((step, index) => (
              <Grid item key={step}>
                <Box
                  component="img"
                  sx={{
                    width: "100px",
                    height: "20vh",
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                  }}
                  src={step}
                  // alt={step.label}
                />
              </Grid>
            ))
        : null}
    </Grid>
  </SwipeableViews>
);

export default SwipeableCarousel;
