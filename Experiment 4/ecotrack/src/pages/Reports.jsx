import React, { Suspense, memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Logs = React.lazy(() => import("./Logs"));

const Reports = () => {
  return (
    <Box mt={2}>
      <Typography variant="h5" component="h3" gutterBottom>
        Reports
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Review your recent EcoTrack activity logs.
      </Typography>
      <Suspense fallback={<Typography>Loading logs...</Typography>}>
        <Logs />
      </Suspense>
    </Box>
  );
};

export default memo(Reports);
