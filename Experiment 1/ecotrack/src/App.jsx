import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";

function App() {
  return (
    <>
      <Header title="EcoTrack - Environmental Impact Tracker" />
      <Dashboard />
      <Logs />
    </>
  );
}

export default App;
