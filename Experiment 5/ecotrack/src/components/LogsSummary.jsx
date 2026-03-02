import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const LogsSummary = ({ total, onReload }) => {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">
        Total Carbon Emission: {total} kg CO₂
      </Typography>
      <Button variant="contained" sx={{ mt: 1 }} onClick={onReload}>
        Reload Logs
      </Button>
    </Paper>
  );
};

export default LogsSummary;