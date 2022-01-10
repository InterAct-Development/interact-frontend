import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import StepDetailed from "./step[id]";

const steps = [
  {
    label: "Starting my Adventure with Erasmus",
    description: `Est ipsum nostrud sit cillum deserunt deserunt occaecat. 
        Tempor ullamco proident ea consectetur exercitation quis elit cillum ullamco magna dolor. 
        Amet ea dolor cupidatat ea commodo magna anim non do voluptate commodo deserunt.`,
  },
  {
    label: "Interacting with other students from around the world",
    description:
      "LOL how do we make this component dynamic? How do we allow users to tap/click on specific steps instead of going step by step with a button? How do we overwrite the designs of this? How do we add ID for specific step and make em clickable to view the detailed version? How do you add steps and disable them when there is nothing added yet?",
  },
  {
    label: "Studying the language and culture",
    description: `Come on man, these lads are Erasmus students. Their main achievement goal will be coming back home without alcohol poisoning.`,
  },
  {
    label: "Step 4",
    description: `Erasmus is great craic.`,
  },
  {
    label: "Running out of ideas",
    description: `Yep.`,
  },
  {
    label: "Running out of ideas",
    description: `Yep.`,
  },
  {
    label: "Running out of ideas",
    description: `Yep.`,
  },
  {
    label: "Running out of ideas",
    description: `Yep.`,
  },
  {
    label: "Running out of ideas",
    description: `Yep.`,
  },
  {
    label: "Running out of ideas",
    description: `Yep.`,
  },
  {
    label: "Running out of ideas",
    description: `Yep.`,
  },
];

const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 10 ? ( // MAKE SURE TO CHANGE THIS TO THE AMOUNT OF STEPS THEY HAVE. MAKE IT DYNAMIC???
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>

                  <Button variant="outlined" href="./step[id].tsx">
                    View
                  </Button>

                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed! Congratulations!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            View them again
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;