import Panel from '../components/common/Panel.jsx';
import './Reports.css';

const reportActions = ['Daily Summary', 'Weekly Report', 'Fuel Accounting', 'Emissions Log', 'Anomaly Report', 'Export CSV'];

export default function Reports() {
  return <div className="reports-page"><div className="dashboard-heading reports-heading"><div><h1>Reports</h1><p>Energy accounting · Audit log · Mission energy summary</p></div><div className="refresh-status"><i /> Auto-refresh 30s | Psi-7 - 78S 163W</div></div><Panel className="reports-panel"><div className="reports-content"><div className="reports-icon">▤</div><h2>Reports &amp; Export</h2><p className="reports-description">Daily, weekly, and monthly energy reports. PDF<br />and CSV export. Audit log and mission energy<br />accounting.</p><div className="report-actions">{reportActions.map((label) => <button className="report-action" key={label}>{label} -&gt;</button>)}</div></div></Panel></div>;
}
