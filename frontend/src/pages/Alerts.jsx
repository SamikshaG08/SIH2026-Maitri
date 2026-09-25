import Panel from '../components/common/Panel.jsx';
import AlertEvent from '../components/alerts/AlertEvent.jsx';
import AlertSummaryCard from '../components/alerts/AlertSummaryCard.jsx';
import { alertEvents, alertSummary, resilienceStatus } from '../data/alertsData.js';
import './Alerts.css';

export default function Alerts() {
  return <div className="alerts-page"><div className="dashboard-heading alerts-heading"><div><h1>Alerts</h1><p>Active alert management - Sensor health - Fallback resilience status</p></div><div className="refresh-status"><i /> Auto-refresh 30s&nbsp; | &nbsp;Ψ-7 - 78°S 163°W</div></div>
    <div className="alert-summary-grid">{alertSummary.map((item) => <AlertSummaryCard key={item.label} {...item} />)}</div>
    <Panel eyebrow="ACTIVE ALERTS & EVENTS" className="alerts-event-panel"><div className="alert-event-list">{alertEvents.map((event) => <AlertEvent key={event.title} {...event} />)}</div></Panel>
    <Panel eyebrow="EDGE RESILIENCE & FALLBACK STATUS" className="resilience-panel"><div className="resilience-grid">{resilienceStatus.map(([label, status, detail, tone]) => <div className={`resilience-card resilience-card--${tone}`} key={label}><span>{label}</span><strong>{status}</strong><p>{detail}</p></div>)}</div></Panel>
  </div>;
}
