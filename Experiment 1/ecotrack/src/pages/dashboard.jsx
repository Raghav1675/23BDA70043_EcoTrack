import logs from "../data/logs";

const Dashboard = () => {
  const totalCarbonFootprint = logs.reduce(
    (total, log) => total + log.carbon,
    0
  );

  return (
    <div>
      <h2>Carbon Footprint Dashboard</h2>
      <p>Total Carbon Footprint: {totalCarbonFootprint} kg</p>

      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.activity} - {log.carbon} kg CO2
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
