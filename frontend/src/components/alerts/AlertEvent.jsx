export default function AlertEvent({ icon, level, tone, title, description, time, active }) {
  return <article className={`alert-event alert-event--${tone} ${active ? '' : 'alert-event--dimmed'}`}><span className="alert-event-icon">{icon}</span><div className="alert-event-body"><div className="alert-event-title"><em>{level}</em><h3>{title}</h3><i /></div><p>{description}</p><time>{time}</time></div>{active && <button className="alert-acknowledge">Acknowledge</button>}</article>;
}
