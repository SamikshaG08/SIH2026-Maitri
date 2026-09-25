import DemoTag from '../components/common/DemoTag.jsx';
import Panel from '../components/common/Panel.jsx';
import ForecastMetricCard from '../components/forecast/ForecastMetricCard.jsx';
import { DemandForecastChart, RenewableChart, TemperatureHumidityChart, WindDemandChart } from '../components/forecast/ForecastChartPanel.jsx';
import { demandForecast, forecastFeatures, forecastTemperature, forecastWindDemand, renewableForecast } from '../data/forecastData.js';
import './Forecast.css';

function InputFeatures() {
  return <Panel eyebrow="FORECAST INPUT FEATURES" className="forecast-features-panel"><div className="feature-list">{forecastFeatures.map(([source, label, value, confidence, type]) => <div className="feature-row" key={label}><DemoTag tone={type === 'real' ? 'green' : type === 'prediction' ? 'blue' : 'orange'}>{source}</DemoTag><span>{label}</span><b className={`feature-value feature-value--${type}`}>{value}</b><em className={`confidence-pill confidence-pill--${confidence.toLowerCase()}`}>{confidence}</em></div>)}</div></Panel>;
}

export default function Forecast() {
  return <div className="forecast-page"><div className="dashboard-heading forecast-heading"><div><h1>Forecast</h1><p>LSTM + Gradient Boost ensemble - 36-hour horizon - Updated 14:00 UTC</p></div><div className="refresh-status"><i /> Auto-refresh 30s&nbsp; | &nbsp;Ψ-7 - 78°S 163°W</div></div>
    <div className="forecast-metric-grid"><ForecastMetricCard label="NEXT-HOUR DEMAND" value="158" unit="kW" confidence={92} /><ForecastMetricCard label="PEAK FORECAST TODAY" value="145" unit="kW" confidence={87} accent="yellow" /><ForecastMetricCard label="HEATING LOAD (NOW)" value="54" unit="kW" confidence={95} accent="green" /><ForecastMetricCard label="FORECAST HORIZON" value="36" unit="hrs" confidence={78} accent="purple" /></div>
    <div className="forecast-chart-grid"><TemperatureHumidityChart data={forecastTemperature} /><WindDemandChart data={forecastWindDemand} /></div><DemandForecastChart data={demandForecast} />
    <div className="forecast-lower-grid"><InputFeatures /><div><RenewableChart data={renewableForecast} /><div className="renewable-summary"><div><span>Wind energy (24hr)</span><strong>2,016<small> kWh</small></strong></div><div><span>Solar energy (24hr)</span><strong className="solar-stat">82<small> kWh</small></strong></div></div></div></div>
    <div className="demo-footer"><DemoTag tone="orange" /> Values shown are static demonstration data for the frontend prototype. No NCPOR, backend, MySQL, or AI/ML connection is active.</div></div>;
}
