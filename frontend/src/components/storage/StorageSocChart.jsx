import { Area, AreaChart, CartesianGrid, Label, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Panel from '../common/Panel.jsx';

export default function StorageSocChart({ data }) {
  return <Panel eyebrow="BATTERY SOC - 24HR HISTORY" className="storage-soc-panel"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data} margin={{ top: 14, right: 10, bottom: 5, left: 0 }}><CartesianGrid stroke="#153452" vertical={false} /><XAxis dataKey="hour" tick={{ fill: '#37668f', fontSize: 10 }} tickLine={false} axisLine={false} /><YAxis domain={[50, 90]} ticks={[50, 60, 70, 80, 90]} tick={{ fill: '#37668f', fontSize: 10 }} tickLine={false} axisLine={false} width={34} /><Tooltip contentStyle={{ background: '#0b2946', border: '1px solid #24547b', color: '#a1d9ff', fontSize: 11 }} /><ReferenceLine y={80} stroke="#4db8ff" strokeDasharray="4 3"><Label value="Charge limit" position="insideTop" fill="#4db8ff" fontSize={11} /></ReferenceLine><Area type="monotone" dataKey="soc" stroke="#4db8ff" strokeWidth={2.5} fill="#163653" fillOpacity={0.8} dot={false} /></AreaChart></ResponsiveContainer></Panel>;
}
