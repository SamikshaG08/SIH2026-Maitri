import Panel from '../common/Panel.jsx';
import BatteryChart from '../charts/BatteryChart.jsx';

export default function BatteryCard() {
  return <Panel eyebrow="BATTERY STATE OF CHARGE" className="battery-panel"><div className="battery-summary"><div className="donut"><span>73%</span></div><div><div className="battery-percent">73<small>%</small></div><div>584 kWh / 800 kWh</div><strong>Charging · +7 kW</strong><div>Temp: −14 °C · Health: 96%</div></div></div><BatteryChart /></Panel>;
}

