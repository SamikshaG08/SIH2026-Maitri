import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TopHeader from './components/layout/TopHeader.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import RightRail from './components/layout/RightRail.jsx';
import Dashboard, { PlaceholderPage } from './pages/Dashboard.jsx';
import Forecast from './pages/Forecast.jsx';
import Dispatch from './pages/Dispatch.jsx';
import Storage from './pages/Storage.jsx';
import Alerts from './pages/Alerts.jsx';
import DigitalTwin from './pages/DigitalTwin.jsx';
import Reports from './pages/Reports.jsx';
import './styles.css';

export default function App() {
  return <BrowserRouter><div className="app-shell"><TopHeader /><div className="app-body"><Sidebar /><main className="main-content"><Routes><Route path="/" element={<Dashboard />} /><Route path="/forecast" element={<Forecast />} /><Route path="/dispatch" element={<Dispatch />} /><Route path="/storage" element={<Storage />} /><Route path="/alerts" element={<Alerts />} /><Route path="/digital-twin" element={<DigitalTwin />} /><Route path="/reports" element={<Reports />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></main><RightRail /></div></div></BrowserRouter>;
}
