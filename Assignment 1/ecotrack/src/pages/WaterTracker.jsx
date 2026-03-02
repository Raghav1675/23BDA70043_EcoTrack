import { useState, useEffect, useCallback } from "react";
import {Box,Button,Typography,Card,CardContent,TextField,} from "@mui/material";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";

function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCount = localStorage.getItem("waterCount");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("waterCount", count);
    }
  }, [count, isLoaded]);

  const addWater = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const removeWater = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const fetchTip = async () => {
    setLoading(true);
    setError("");
    setTip("");

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setTip(data.slip.advice);
    } catch {
      setError("Error fetching tip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <Box display="flex" justifyContent="center" mt={5}>
        <Card sx={{ width: 400 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Daily Water Tracker
            </Typography>

            <CounterDisplay count={count} goal={goal} />

            {count >= goal && (
              <Typography color="success.main">Goal Reached</Typography>
            )}

            <Box mt={2} display="flex" gap={2}>
              <Button variant="contained" onClick={addWater}>
                +
              </Button>

              <Button variant="outlined" onClick={removeWater}>
                -
              </Button>

              <Button variant="text" onClick={reset}>
                Reset
              </Button>
            </Box>

            <Box mt={3}>
              <TextField
                label="Set Daily Goal"
                type="number"
                fullWidth
                value={goal}
                onChange={(e) => setGoal(Number(e.target.value))}
              />
            </Box>

            <Box mt={3}>
              <Button variant="contained" onClick={fetchTip}>
                Get Health Tip
              </Button>

              {loading && <Typography>Loading...</Typography>}
              {error && <Typography color="error">{error}</Typography>}
              {tip && <Typography>Today’s Health Tip: {tip}</Typography>}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default WaterTracker;
