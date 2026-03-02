import logs from "../data/logs";

const Logs = () => {
  const highImpact = logs.filter(
    (log) => log.carbon >= 4
  );

  return (
    <div>
      <h2>Daily Logs (High Impact)</h2>
      <ul>
        {highImpact.map((log) => (
          <li key={log.id}>
            {log.activity} : {log.carbon} kg CO2
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
