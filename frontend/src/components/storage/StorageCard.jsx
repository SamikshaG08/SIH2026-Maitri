export default function StorageCard({ title, percent, accent, details }) {
  return <article className={`storage-card storage-card--${accent}`}><span className="eyebrow">{title}</span><div className="storage-ring" style={{ '--storage-progress': `${percent * 3.6}deg` }}><strong>{percent}%</strong></div><dl className="storage-details">{details.map(([label, value, tone]) => <div key={label}><dt>{label}</dt><dd className={`storage-value storage-value--${tone}`}>{value}</dd></div>)}</dl></article>;
}
