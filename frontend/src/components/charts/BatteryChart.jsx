import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { batteryData } from '../../data/dashboardData.js';

export default function BatteryChart() {
  return <div className="battery-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={batteryData} margin={{ top: 6, right: 0, bottom: 0, left: 0 }}><XAxis dataKey="hour" tick={{ fill: '#37668f', fontSize: 10 }} tickLine={false} axisLine={false} /><YAxis domain={[50, 90]} ticks={[60, 90]} tick={{ fill: '#37668f', fontSize: 10 }} tickLine={false} axisLine={false} width={28} /><Tooltip /><Area type="monotone" dataKey="value" stroke="#49b5ff" fill="#133653" strokeWidth={2} /></AreaChart></ResponsiveContainer></div>;
}

