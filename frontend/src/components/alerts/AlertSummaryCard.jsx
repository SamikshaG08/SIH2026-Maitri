export default function AlertSummaryCard({ label, count, detail, accent, icon }) {
  return <article className={`alert-summary alert-summary--${accent}`}><strong>{icon}</strong><div><span>{label}</span><b>{detail}</b></div></article>;
}
