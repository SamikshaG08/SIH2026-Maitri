export default function Panel({ title, eyebrow, action, className = '', children }) {
  return <section className={`panel ${className}`}>
    {(eyebrow || title || action) && <div className="panel-heading"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}{title && <h2>{title}</h2>}</div>{action && <span className="panel-action">{action}</span>}</div>}
    {children}
  </section>;
}

