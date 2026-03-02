import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EcoIcon from "@mui/icons-material/EnergySavingsLeaf";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <EcoIcon sx={{ mr: 1.5 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EcoTrack
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;