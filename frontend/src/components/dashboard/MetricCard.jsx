import DemoTag from '../common/DemoTag.jsx';

export default function MetricCard({ eyebrow, value, unit, detail, accent = 'blue', badge = 'SIMULATED' }) {
  return <article className={`metric-card metric-card--${accent}`}><div className="metric-top"><span className="eyebrow">{eyebrow}</span><DemoTag tone={badge === 'AI PREDICTION' ? 'blue' : 'orange'}>{badge}</DemoTag></div><div className="metric-value">{value}<small>{unit}</small></div><div className="metric-detail">{detail}</div></article>;
}

