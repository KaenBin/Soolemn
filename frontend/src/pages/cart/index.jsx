import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { ColorlibConnector, ColorlibStepIcon } from "./Child/StepperComp";
import { Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Unstable_Grid2";

import { setAuthenticating } from "@/redux/actions/miscActions";
import Step1 from "./Child/Step1";
import Step2 from "./Child/Step2";
import Step3 from "./Child/Step3";
// import mock_product from "@/mockdata/products";
// import { ProductGroup } from "@/components/product";

export default function Cart() {
  const dispatch = useDispatch();
  const steps = ["Introduction", "Your Experience", "Your Certificate"];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  useEffect(
    () => () => {
      dispatch(setAuthenticating(false));
    },
    []
  );

  return (
    <main className="content">
      <div className="home">
        <Box sx={{width:"80%", margin:"auto"}}>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
            marginTop="32px"
            marginBottom="32px"
          >
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
              <Box sx={{width:"60%", marginBottom:"50px"}}>
              <Stepper
                // alternativeLabel
                activeStep={activeStep}
                // connector={<ColorlibConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconComponent={ColorlibStepIcon}
                      onClick={handleStep(index)}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <React.Fragment>
                  {activeStep === 0 ? (
                    <Grid item xs={12} sx={{ paddingBottom: "16px" }}>
                      <Step1/>
                    </Grid>
                  ) : activeStep === 1 ? (
                    <Grid item xs={12} sx={{ paddingBottom: "16px" }}>
                      <Step2/>
                    </Grid>
                  ) : (
                    <Grid item xs={12} sx={{ paddingBottom: "16px" }}>
                      <Step3/>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        width: "80%",
                        margin: "auto",
                        marginTop: "30px",
                      }}
                    >
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        className="AddButton"
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {activeStep === 2 ? (
                        <Button
                          variant="contained"
                          className="AddButton"
                          // onClick={prop.preProcessing}
                        >
                          Finish
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          className="AddButton"
                          onClick={handleNext}
                          sx={{ mr: 1 }}
                        >
                          Next
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </React.Fragment>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}
