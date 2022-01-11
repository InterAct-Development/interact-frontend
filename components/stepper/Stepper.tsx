import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { goals } from "./Steps";

// 1. Find out how to make steps on stepper accessible/optional
// 2. Create a 'add your first goal' button and hide the stepper until first goal has been retrieved and sent back by server.
// 3. Create constraints/checks such as 11-steps max | 1 step minimum
// 4. User model needs list of IDs associated with each goal unique to the user with a role of 'student'.

const dummyDesc = `Est ipsum nostrud sit cillum deserunt deserunt occaecat. 
Tempor ullamco proident ea consectetur exercitation quis elit cillum ullamco magna dolor. 
Amet ea dolor cupidatat ea commodo magna anim non do voluptate commodo deserunt.`;

const steps = [
  {
    label: "Step 1",
    description: dummyDesc,
  },
  {
    label: "Step 2",
    description: dummyDesc,
  },
  {
    label: "Step 3",
    description: dummyDesc
  },
  {
    label: "Step 4",
    description: dummyDesc,
  },
  {
    label: "Step 5",
    description: dummyDesc,
  },
  {
    label: "Step 6",
    description: dummyDesc,
  },
  {
    label: "Step 7",
    description: dummyDesc,
  },
  {
    label: "Step 8",
    description: dummyDesc,
  },
  {
    label: "Step 9",
    description: dummyDesc,
  },
  {
    label: "Step 10",
    description: dummyDesc,
  },
  {
    label: "Step 11",
    description: dummyDesc,
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
        {goals(steps, handleNext, handleBack)}
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
