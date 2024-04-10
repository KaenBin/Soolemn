import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const SwipeableCarousel = (props) => (
  <SwipeableViews>
    <Grid
      container
      width="100%"
      justifyContent="space-between"
      display="flex"
      pt="5vh"
      // padding="10px"
    >
      {props.images
        .slice(
          props.images.length - props.activeStep < 3
            ? props.images.length - 3
            : props.activeStep == 1
            ? 0
            : props.activeStep,
          props.images.length - props.activeStep < 3
            ? props.images.length
            : props.activeStep == 1
            ? 3
            : props.activeStep + 3
        )
        .map((step, index) => (
          <Grid item key={step.label}>
            <Box
              component="img"
              sx={{
                width: "80px",
                height: "20vh",
                display: "block",
                maxWidth: 400,
                overflow: "hidden",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
              }}
              src={step.imgPath}
              alt={step.label}
            />
          </Grid>
        ))}
    </Grid>
  </SwipeableViews>
);

export default SwipeableCarousel;
