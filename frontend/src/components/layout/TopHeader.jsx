import DemoTag from '../common/DemoTag.jsx';
import { demoNotice } from '../../data/dashboardData.js';

export default function TopHeader() {
  return <header className="top-header">
    <div className="brand-block"><div className="brand-mark">●</div><div><div className="brand-name">POLARIS EMS</div><div className="brand-subtitle">Ψ-7 Research Station · Ross Ice Shelf</div></div></div>
    <div className="header-time"><strong>13:38:52</strong><span>|</span><span>Fri, 25 Sept<br />2026</span></div>
    <div className="station-selector"><span className="label">STATION</span><button className="station-button active">Maitri</button></div>
    <div className="header-readouts"><div><span>NO<br />FEED</span><small>· Edge<br />mode</small></div><div><span>LOAD <b>142</b><em>kW</em></span><span>AI</span></div><div><span>WIND <b className="green">87</b><em>kW</em></span><span>SIM</span></div><div><span>BATT <b className="green">73%</b></span><span>SIM</span></div><div><span>TEMP <b>−</b></span></div></div>
    <div className="last-update"><span>Last<br />update</span><button aria-label="Refresh">↻</button></div>
    <div className="profile"><span className="avatar">DI</span><div><strong>Dr. Halvorsen</strong><small>Operations Commander · ALPHA</small></div><button>logout</button></div>
    <button className="emergency">⚠<span>EMERGENCY</span></button>
    <div className="header-demo"><DemoTag tone="orange" /><span>{demoNotice}</span></div>
  </header>;
}
