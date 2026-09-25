export default function DispatchMetricCard({ label, value, detail, accent }) {
  return <article className={`dispatch-metric dispatch-metric--${accent}`}><span className="eyebrow">{label}</span><strong>{value}</strong><span className="dispatch-metric-detail">{detail}</span></article>;
}
