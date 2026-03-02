import { Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <Box p={3}>
        <Typography variant="h4">Welcome to EcoTrack Dashboard</Typography>
      </Box>
    </>
  );
}

export default Dashboard;
