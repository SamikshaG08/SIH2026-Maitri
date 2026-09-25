import { useEffect, useRef, useState } from 'react';
import Panel from '../components/common/Panel.jsx';
import DigitalTwinTopology from '../components/digitalTwin/DigitalTwinTopology.jsx';
import { architectureStages, extremeParameters, normalVsSimulated, predictedImpact, scenarioImpact, twinScenarios, twinStatus } from '../data/digitalTwinData.js';
import './DigitalTwin.css';

function Architecture() { return <Panel eyebrow="TWIN ARCHITECTURE" className="architecture-panel"><div className="architecture-list">{architectureStages.map(([title, detail, tone]) => <div className={`architecture-step architecture-step--${tone}`} key={title}><strong>{title}</strong><span>{detail}</span></div>)}</div></Panel>; }

export default function DigitalTwin() {
  const [selected, setSelected] = useState('wind');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);
  const simulationTimer = useRef(null);
  const impact = scenarioImpact[selected];

  useEffect(() => () => window.clearTimeout(simulationTimer.current), []);

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationComplete(false);
    simulationTimer.current = window.setTimeout(() => {
      setIsSimulating(false);
      setSimulationComplete(true);
    }, 1200);
  };

  const handleScenarioSelect = (key) => {
    window.clearTimeout(simulationTimer.current);
    setSelected(key);
    setIsSimulating(false);
    setSimulationComplete(false);
  };

  return <div className="digital-twin-page"><div className="dashboard-heading twin-heading"><div><h1>Digital Twin</h1><p>Virtual replica for real-time monitoring, what-if analysis, and extreme-condition simulation</p></div><div className="refresh-status"><i /> Auto-refresh 30s | Psi-7 - 78S 163W</div></div>
    <div className="twin-top-grid"><DigitalTwinTopology /><div className="twin-status-stack"><Panel eyebrow="DIGITAL TWIN STATUS" className="twin-status-panel"><div className="twin-status-list">{twinStatus.map(([label, value, tone]) => <div key={label}><span>{label}</span><b className={`status-${tone}`}>{value}</b></div>)}</div></Panel><Architecture /></div></div>
    <Panel eyebrow="SCENARIO SIMULATOR - WHAT-IF ANALYSIS" className="scenario-panel" action={<div className="scenario-action">{simulationComplete && <button className="scenario-button secondary" onClick={() => setSimulationComplete(false)}>Reset</button>}<button className="scenario-button" disabled={isSimulating} onClick={handleRunSimulation}>{isSimulating ? 'Running Simulation...' : simulationComplete ? 'Re-run' : 'Run Simulation'}</button></div>}><div className="scenario-grid">{twinScenarios.map(([icon, title, severity, key]) => <button className={`scenario-option ${selected === key ? 'selected' : ''}`} key={key} onClick={() => handleScenarioSelect(key)}><span>{icon}</span><strong>{title}</strong><em>{severity}</em></button>)}</div><div className="scenario-impact"><span className="scenario-impact-icon">Cloud</span><div><h3>{impact.title}</h3><span className="impact-badge">{impact.badge}</span><span className="panel-action"> PROJECTED</span><p>{impact.subtitle}</p></div><div className="impact-metrics"><div>WIND<strong>{impact.wind}</strong><b>{impact.windDelta}</b></div><div>DIESEL<strong>{impact.diesel}</strong><b>{impact.dieselDelta}</b></div><div>SOC<strong>{impact.soc}</strong><b>{impact.socDelta}</b></div></div></div></Panel>
    {simulationComplete && <><div className="twin-lower-grid"><Panel eyebrow="NORMAL VS SIMULATED - WHAT-IF RESULTS" action={<span className="impact-badge">SIMULATED</span>}><div className="comparison-list">{normalVsSimulated.map(([label, normal, simulated, delta]) => <div className="comparison-row" key={label}><span>{label}</span><span>{normal} -&gt;</span><span>{simulated}</span><span>{delta}</span></div>)}</div></Panel><Panel eyebrow="AI RECOMMENDED RESPONSE" className="response-panel"><div className="response-note">MPC optimizer recalculated for scenario</div><div className="response-list">{['Increase BESS discharge rate to compensate', 'Re-optimize diesel dispatch using MPC controller', 'Preserve minimum battery SOC floor of 30%', 'Monitor renewable recovery when wind resumes', 'Maintain critical station loads (lab + habitat)'].map((item, index) => <div className="response-row" key={item}><b>{index + 1}</b><span>{item}</span></div>)}</div><button className="apply-response">Apply Recommended Dispatch</button></Panel></div><Panel eyebrow="EXTREME CONDITION SIMULATION - BLIZZARD SCENARIO" className="extreme-panel"><div className="extreme-grid"><div><h3>Scenario Parameters</h3><div className="extreme-list">{extremeParameters.map(([label, value, tone]) => <div className="extreme-row" key={label}><span>{label}</span><b className={tone}>{value}</b></div>)}</div></div><div><h3>Predicted System Impact <b className="warning">[Projected]</b></h3><div className="extreme-list">{predictedImpact.map(([label, value, delta]) => <div className="extreme-row" key={label}><span>{label}</span><b>{value} <em>{delta}</em></b></div>)}</div><div className="extreme-warning">High-impact scenario - Pre-charge BESS to 85% + activate G2</div></div></div></Panel></>}
  </div>;
}
