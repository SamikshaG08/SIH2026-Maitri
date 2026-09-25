import Panel from '../common/Panel.jsx';
import { alerts, systemHealth } from '../../data/dashboardData.js';

export default function RightRail() {
  return <aside className="right-rail">
    <Panel eyebrow="MET OBS — MAITRI ·" title="70°46'S 11°44'E" className="met-panel"><div className="feed-state">◼ &nbsp; AWAITING NCPOR FEED</div><div className="observations"><div>Air Temp <b>—</b></div><div>Humidity <b>—</b></div><div>Pressure <b>—</b></div><div>Wind (kts) <b>—</b></div><div>Wind (m/s) <b>—</b></div><div>Wind dir <b>—</b></div></div><div className="rail-actions"><button>↻ Refresh</button><button className="load-sample">Load Sample</button></div></Panel>
    <Panel eyebrow="ACTIVE ALERTS" className="alerts-panel"><div className="alert-list">{alerts.map((alert) => <div className={`alert alert--${alert.level}`} key={alert.title}><strong>{alert.title}</strong><span>{alert.time}</span></div>)}</div></Panel>
    <Panel eyebrow="SYSTEM HEALTH" className="rail-health"><div className="health-list">{systemHealth.map((item) => <div key={item.label}><span>{item.label}</span><b className={`tone-${item.tone}`}><i />{item.value}</b></div>)}</div></Panel>
  </aside>;
}

