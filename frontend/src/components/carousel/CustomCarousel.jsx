import * as React from "react";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {
  MobileStepper,
  Button,
  Box,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SwipeableCarousel from "./SwipeableCarousel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath:
//       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//   },
// ];

const CustomCarousel = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.item.images ? props.item.images.length : 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Grid
        container
        width="290px"
        justifyContent="space-between"
        display="flex"
        mx="5px"
        position="absolute"
        top="45vh"
        zIndex="2"
      >
        <Grid item>
          <IconButton
            onClick={handleBack}
            sx={{
              backgroundColor: "#ffffff",
              "&:hover": {
                color: "#ffffff",
              },
              "&:disabled": {
                color: "#ffffff",
              },
            }}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "#ffffff",
              "&:hover": {
                color: "#ffffff",
              },
              "&:disabled": {
                color: "#ffffff",
              },
            }}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Grid>
      </Grid>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.item.images
          ? props.item.images.map((step, index) => (
              <div key={step}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: "55vh",
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                    }}
                    src={step}
                    alt={"Image " + index}
                  />
                ) : null}
              </div>
            ))
          : null}
      </AutoPlaySwipeableViews>
      <SwipeableCarousel
        images={props.item.images ? props.item.images : null}
        activeStep={activeStep}
        maxSteps={maxSteps}
      />
    </Box>
  );
};

export default CustomCarousel;
