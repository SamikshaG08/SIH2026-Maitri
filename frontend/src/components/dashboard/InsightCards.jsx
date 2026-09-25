import Panel from '../common/Panel.jsx';
import { emissions } from '../../data/dashboardData.js';

export function EmissionsCard() {
  return <Panel eyebrow="CO₂ EMISSIONS — BY END-USE" action="SAME TV ref [6]" className="emissions-panel"><div className="big-stat">33.5 <small>kg CO₂/hr</small><span>−62% vs diesel-only</span></div><div className="emission-list">{emissions.map((item) => <div key={item.label}><div><span>{item.label}</span><b>{item.value}</b></div><i style={{ width: item.value.match(/\d+%/)?.[0] || '20%', background: item.color }} /></div>)}</div><div className="baseline">Annual baseline (SANAE IV): 2.68 kg/L diesel [6]<br />~798 t CO₂/yr</div></Panel>;
}

export function PeakCard() {
  return <Panel eyebrow="PEAK DEMAND — TODAY" className="peak-panel"><div className="peak-value">145 <small>kW</small></div><div>SANAE IV 2× baseline [3] · 12:14 UTC</div><div className="capacity-bar"><i /></div><div>85% of installed 170 kW capacity [2]</div></Panel>;
}

export function HealthCard() {
  return <Panel eyebrow="SYSTEM HEALTH SCORE" className="score-panel"><div className="score-content"><div className="score-donut"><span>94%</span></div><div><div className="score-value">94<small>/100</small></div><strong>2 active warnings</strong><b>2 critical alerts</b></div></div></Panel>;
}

export function DataQualityCard() {
  return <Panel eyebrow="DATA QUALITY" action="NCPOR MAITRI" className="quality-panel"><div className="quality-status"><i /> <strong>Good</strong><span>No feed</span></div><div className="quality-list"><div>Completeness <b>98%</b></div><div>Missing values <b>2</b></div><div>Outliers detected <b>1</b></div><div>Duplicate records <b>0</b></div><div>Out-of-range values <b>0</b></div><div>Invalid timestamps <b>0</b></div><div>Unit validation <b>PASS</b></div></div><div className="quality-foot">Last validated: —<br />Thresholds configurable from NCPOR/WMO specs</div></Panel>;
}

