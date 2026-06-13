import { decideStrategy } from "../lib/decision-engine";

export default function Dashboard() {

  const context = {
    networkSpeed: 1,
    cacheHit: false,
    userLoggedIn: true,
    latency: 450,
    deviceRam: 4,
    cpuCores: 2
  };

  const result = decideStrategy(context);

  return (
    <div style={{ padding: "40px" }}>

      <h1>ARE Dashboard</h1>

      <h2>
        Selected Strategy:
      </h2>

      <h1>
        {result.selectedStrategy}
      </h1>

      <h2>Scores</h2>

      <ul>
        <li>CSR : {result.score.CSR}</li>
        <li>SSR : {result.score.SSR}</li>
        <li>ISR : {result.score.ISR}</li>
        <li>SSG : {result.score.SSG}</li>
      </ul>

    </div>
  );
}