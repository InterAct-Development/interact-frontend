import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{
          width: 100,
          height: 100,
        }}
        variant="square"
      />
    </Stack>
  );
}
