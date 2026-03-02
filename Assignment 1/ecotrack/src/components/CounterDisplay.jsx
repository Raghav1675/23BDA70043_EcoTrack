import React from "react";
import { Typography } from "@mui/material";

const CounterDisplay = React.memo(({ count, goal }) => {
  return (
    <Typography variant="h6">
      {count} / {goal} glasses completed
    </Typography>
  );
});

export default CounterDisplay;
