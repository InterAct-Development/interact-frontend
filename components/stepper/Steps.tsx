import React from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const goals = (
  steps: any,
  handleNext: React.MouseEventHandler | undefined,
  handleBack: React.MouseEventHandler | undefined
) => {
  return steps.map((step: any, index: number) => (
    <Step key={step.label}>
      <StepLabel
        optional={
          index === 10 ? (
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
  ));
};
