import DemoTag from '../common/DemoTag.jsx';

export default function ForecastMetricCard({ label, value, unit, confidence, accent = 'blue' }) {
  return <article className={`forecast-metric forecast-metric--${accent}`}>
    <div className="forecast-metric-top"><span className="eyebrow">{label}</span><DemoTag tone="blue">AI PREDICTION</DemoTag></div>
    <div className="forecast-metric-value">{value}<small>{unit}</small></div>
    <div className="confidence-row"><span>Model confidence</span><b>{confidence}%</b></div>
    <div className="confidence-track"><i style={{ width: `${confidence}%` }} /></div>
  </article>;
}
