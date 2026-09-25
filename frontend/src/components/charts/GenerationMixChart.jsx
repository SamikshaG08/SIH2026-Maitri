import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Panel from '../common/Panel.jsx';
import { mixData } from '../../data/dashboardData.js';

export default function GenerationMixChart() {
  return <Panel eyebrow="GENERATION MIX — TODAY" className="mix-panel"><ResponsiveContainer width="100%" height="100%"><BarChart data={mixData} barCategoryGap="22%" margin={{ top: 8, right: 8, bottom: 0, left: 0 }}><CartesianGrid stroke="#153452" vertical={false} /><XAxis dataKey="hour" tick={{ fill: '#37668f', fontSize: 10 }} tickLine={false} axisLine={false} /><YAxis domain={[0, 160]} ticks={[0, 40, 80, 120, 160]} tick={{ fill: '#37668f', fontSize: 10 }} tickLine={false} axisLine={false} width={34} /><Tooltip cursor={{ fill: '#102a45' }} /><Bar dataKey="wind" stackId="mix" fill="#06cda0" /><Bar dataKey="solar" stackId="mix" fill="#ffb719" /><Bar dataKey="diesel" stackId="mix" fill="#ff6b32" radius={[2, 2, 0, 0]} /></BarChart></ResponsiveContainer></Panel>;
}

