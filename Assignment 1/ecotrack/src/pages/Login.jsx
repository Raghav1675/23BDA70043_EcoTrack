import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "loggedIn");
    navigate("/dashboard");
  };

  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h5" gutterBottom>
        Login Page
      </Typography>

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
