import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Panel from '../common/Panel.jsx';
import { loadGenerationData } from '../../data/dashboardData.js';

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return <div className="chart-tooltip"><strong>{label}:00</strong><span>Forecast: {payload.find((item) => item.dataKey === 'forecast')?.value} kW</span><span>Load: {payload.find((item) => item.dataKey === 'actual')?.value} kW</span></div>;
}

export default function LoadGenerationChart() {
  return <Panel eyebrow="24-HOUR LOAD VS GENERATION" className="load-chart-panel" action={<div className="legend"><span className="legend-load">■ Actual Load</span><span className="legend-forecast">■ Forecast</span><span className="legend-wind">■ Wind</span><span className="legend-solar">■ Solar</span><span className="legend-diesel">■ Diesel</span></div>}><ResponsiveContainer width="100%" height="100%"><LineChart data={loadGenerationData} margin={{ top: 16, right: 8, bottom: 4, left: 0 }}><CartesianGrid stroke="#153452" vertical={false} /><XAxis dataKey="hour" tick={{ fill: '#37668f', fontSize: 11 }} tickLine={false} axisLine={false} /><YAxis domain={[0, 160]} ticks={[0, 40, 80, 120, 160]} tick={{ fill: '#37668f', fontSize: 11 }} tickLine={false} axisLine={false} width={34} /><Tooltip content={<ChartTooltip />} cursor={{ stroke: '#3faeff', strokeDasharray: '4 4' }} /><Line type="monotone" dataKey="actual" stroke="#49b5ff" strokeWidth={2.5} dot={false} /><Line type="monotone" dataKey="forecast" stroke="#6e9ac1" strokeWidth={1.5} strokeDasharray="4 3" dot={false} /></LineChart></ResponsiveContainer></Panel>;
}

