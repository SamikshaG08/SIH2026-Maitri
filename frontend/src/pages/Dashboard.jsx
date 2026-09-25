import DemoTag from '../components/common/DemoTag.jsx';
import Panel from '../components/common/Panel.jsx';
import MetricCard from '../components/dashboard/MetricCard.jsx';
import BatteryCard from '../components/dashboard/BatteryCard.jsx';
import LoadGenerationChart from '../components/charts/LoadGenerationChart.jsx';
import GenerationMixChart from '../components/charts/GenerationMixChart.jsx';
import { DataQualityCard, EmissionsCard, HealthCard, PeakCard } from '../components/dashboard/InsightCards.jsx';

export default function Dashboard() {
  return <div className="dashboard-page"><div className="dashboard-heading"><div><h1>Overview</h1><p>Real-time station energy status · Polar winter regime · Day 34</p></div><div className="refresh-status"><i /> Auto-refresh 30s · Ψ-7 · 78°S 163°W</div></div><div className="metric-grid"><MetricCard eyebrow="PREDICTED LOAD" value="142" unit="kW" detail="+3.2% vs baseline" accent="blue" badge="AI PREDICTION" /><MetricCard eyebrow="WIND OUTPUT" value="87" unit="kW" detail="2 turbines · 73% cap" accent="green" /><MetricCard eyebrow="SOLAR OUTPUT" value="12" unit="kW" detail="4.2 hrs daylight today" accent="yellow" /><MetricCard eyebrow="DIESEL DISPATCH" value="43" unit="kW" detail="Optimization output" accent="orange" badge="AI PREDICTION" /><MetricCard eyebrow="CO₂ (DIESEL)" value="33.5" unit="kg/hr" detail="−62% vs diesel-only" accent="pale" /></div><LoadGenerationChart /><div className="chart-row"><GenerationMixChart /><BatteryCard /></div><div className="insight-row"><EmissionsCard /><PeakCard /><HealthCard /><DataQualityCard /></div><div className="demo-footer"><DemoTag tone="orange" /> Values shown are static demonstration data for the frontend prototype. No NCPOR, backend, MySQL, or AI/ML connection is active.</div></div>;
}

export function PlaceholderPage({ title }) {
  return <Panel eyebrow="MODULE PLACEHOLDER" title={title} className="placeholder-page"><p>This route is reserved for the {title} module.</p><p className="muted">// TODO: Implement after the Overview prototype is approved.</p></Panel>;
}

