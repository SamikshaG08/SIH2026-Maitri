import Panel from '../common/Panel.jsx';
import { topologyNodes } from '../../data/digitalTwinData.js';

export default function DigitalTwinTopology() {
  return <Panel eyebrow="DIGITAL STATION MODEL - LIVE TOPOLOGY" className="twin-topology-panel" action={<span className="synchronized"><i /> SYNCHRONIZED</span>}><div className="topology-canvas"><div className="topology-links"><i className="topology-link link-wind" /><i className="topology-link link-solar" /><i className="topology-link link-load" /><i className="topology-link link-diesel" /><i className="topology-link link-weather" /></div>{topologyNodes.map(([name, icon, label, value]) => <div className={`topology-node topology-node--${name}`} key={name}><span>{icon}</span><b>{label}</b><strong>{value}</strong></div>)}<div className="topology-caption"><span>78°S 163°W · Edge topology</span><span>Update rate: 1 Hz · Model confidence: 96%</span></div></div></Panel>;
}
