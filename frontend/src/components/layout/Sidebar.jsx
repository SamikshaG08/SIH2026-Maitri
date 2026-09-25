import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/dashboardData.js';

export default function Sidebar() {
  return <aside className="sidebar"><nav>{navItems.map((item) => <NavLink key={item.label} to={item.path} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><span className="nav-icon">{item.icon}</span><span>{item.label}</span>{item.count && <b className="nav-count">{item.count}</b>}</NavLink>)}</nav><div className="sidebar-footer"><div>Edge controller v2.4.1</div><div>Model: LSTM-GB-Hybrid</div><div>Last cloud sync: 6h ago</div><div>Uptime: 34d 12h</div></div></aside>;
}

