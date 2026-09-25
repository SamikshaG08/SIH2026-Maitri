import Panel from '../components/common/Panel.jsx';
import DispatchMetricCard from '../components/dispatch/DispatchMetricCard.jsx';
import { BatteryScheduleChart, DispatchPlanChart } from '../components/dispatch/DispatchCharts.jsx';
import { batterySchedule, dispatchPlan, generatorRecommendations } from '../data/dispatchData.js';
import './Dispatch.css';

function GeneratorRecommendations() {
  return <Panel eyebrow="DIESEL GENERATOR RECOMMENDATION" className="recommendation-panel"><div className="recommendation-list">{generatorRecommendations.map(([time, generator, state, output, reason, stateType]) => <div className="recommendation-row" key={time}><span className="recommendation-time">{time}</span><span className="recommendation-generator">{generator}</span><span className={`recommendation-state recommendation-state--${stateType}`}>{state}</span><strong className="recommendation-output">{output}</strong><span className="recommendation-reason">{reason}</span></div>)}</div></Panel>;
}

export default function Dispatch() {
  return <div className="dispatch-page"><div className="dashboard-heading dispatch-heading"><div><h1>Dispatch</h1><p>Rolling horizon optimization - MPC controller - Next recalculation: 15:00</p></div><div className="refresh-status"><i /> Auto-refresh 30s&nbsp; | &nbsp;Ψ-7 - 78°S 163°W</div></div>
    <div className="dispatch-metric-grid"><DispatchMetricCard label="FUEL COST TODAY" value="$318" detail="↓ $42 vs baseline" accent="yellow" /><DispatchMetricCard label="CO₂ TODAY" value="284 kg" detail="−31% renewable offset" accent="orange" /><DispatchMetricCard label="RELIABILITY SCORE" value="99.2%" detail="No outages - 34 days" accent="green" /><DispatchMetricCard label="BATTERY DEGRADATION" value="0.003%" detail="Cycle-managed today" accent="purple" /></div>
    <DispatchPlanChart data={dispatchPlan} /><div className="dispatch-lower-grid"><div><BatteryScheduleChart data={batterySchedule} /><div className="battery-summary-grid"><div><span>Max charge</span><strong>+40 kW</strong></div><div><span>Max discharge</span><strong className="discharge-value">-25 kW</strong></div><div><span>Min SOC floor</span><strong className="soc-value">30%</strong></div></div></div><GeneratorRecommendations /></div>
  </div>;
}
