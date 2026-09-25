export const twinScenarios = [
  ['☁', 'Wind Turbine #2 Failure', 'MODERATE', 'wind'], ['☼', 'Solar Generation Drop', 'LOW', 'solar'],
  ['☁', 'Blizzard / Extreme Weather', 'HIGH', 'blizzard'], ['◈', 'Grid / Comms Outage', 'MODERATE', 'grid'],
  ['▣', 'Battery Degradation Event', 'MODERATE', 'battery'], ['ϟ', 'Sudden Load Increase', 'HIGH', 'load'],
];

export const topologyNodes = [
  ['wind', '☁', 'Wind', '87 kW'], ['solar', '☼', 'Solar', '12 kW'], ['bus', '◇', 'Energy Bus', '142 kW'],
  ['bess', '▣', 'BESS', 'SOC 73%'], ['load', '▰', 'Station Load', '142 kW'], ['diesel', '▤', 'Diesel', '43 kW'],
  ['hydrogen', '♙', 'H₂ Store', '45% · 112 kg'], ['weather', '♟', 'Weather', '-28°C · 14 m/s'],
];

export const twinStatus = [
  ['Model Status', 'Synchronized', 'good'], ['Simulation State', 'Scenario active', 'warning'], ['Data Sync', 'Real-time · 1 Hz', 'blue'],
  ['Last Update', 'Just now', 'blue'], ['Model Confidence', '96%', 'good'], ['Edge Controller', 'v2.4.1 online', 'good'],
];

export const architectureStages = [
  ['Physical Station', 'Sensors · Actuators · Assets', 'physical'], ['IoT / Telemetry', 'Edge gateway · MQTT · 1 Hz', 'telemetry'],
  ['Digital Twin Model', 'Physics + ML replica', 'model'], ['Scenario Simulation', 'What-if · Monte Carlo', 'scenario'], ['AI Forecast + MPC', 'LSTM · Gradient Boost', 'forecast'], ['Control Action', 'Dispatch · Alerts · Fallback', 'action'],
];

export const scenarioImpact = {
  wind: { title: 'Wind Turbine #2 Failure', subtitle: 'Wind generation decreases by 23%', badge: 'IMPACT: MODERATE', wind: '67 kW', windDelta: '-20 kW', diesel: '61 kW', dieselDelta: '+18 kW', soc: '65%', socDelta: '-8%' },
  solar: { title: 'Solar Generation Drop', subtitle: 'Solar output decreases by 60%', badge: 'IMPACT: LOW', wind: '87 kW', windDelta: '0 kW', diesel: '47 kW', dieselDelta: '+4 kW', soc: '70%', socDelta: '-3%' },
  blizzard: { title: 'Blizzard / Extreme Weather', subtitle: 'Renewable generation constrained by weather', badge: 'IMPACT: HIGH', wind: '42 kW', windDelta: '-45 kW', diesel: '71 kW', dieselDelta: '+28 kW', soc: '61%', socDelta: '-12%' },
  grid: { title: 'Grid / Comms Outage', subtitle: 'Station operating in islanding mode', badge: 'IMPACT: MODERATE', wind: '87 kW', windDelta: '0 kW', diesel: '54 kW', dieselDelta: '+11 kW', soc: '68%', socDelta: '-5%' },
  battery: { title: 'Battery Degradation Event', subtitle: 'BESS charge rate reduced for cell protection', badge: 'IMPACT: MODERATE', wind: '87 kW', windDelta: '0 kW', diesel: '49 kW', dieselDelta: '+6 kW', soc: '62%', socDelta: '-11%' },
  load: { title: 'Sudden Load Increase', subtitle: 'Station demand increases by 18%', badge: 'IMPACT: HIGH', wind: '87 kW', windDelta: '0 kW', diesel: '68 kW', dieselDelta: '+25 kW', soc: '59%', socDelta: '-14%' },
};

export const normalVsSimulated = [['Wind Output', '87 kW', '67 kW', '-20kW'], ['Solar Output', '12 kW', '12 kW', '0kW'], ['Diesel Output', '43 kW', '61 kW', '+18kW'], ['Battery SOC', '73%', '65%', '-8%'], ['CO₂ Emissions', '11.8 kg/hr', '14 kg/hr', '+22'], ['Station Load', '142 kW', '142 kW', '0kW'], ['Reliability', '99.2%', '98.2%', '-1%']];

export const extremeParameters = [['Temperature', '-32 °C', 'blue'], ['Wind Speed', '18 m/s (turbine stress)', 'good'], ['Cloud Cover', '98% overcast', 'blue'], ['Solar Irradiance', 'Very low · ~5 W/m²', 'warning'], ['WT Performance', 'Reduced · blade icing risk', 'critical'], ['Heating Demand', '+18% vs baseline', 'critical']];
export const predictedImpact = [['Station Load', '154 kW', '+12 kW'], ['Wind Output', '74 kW', '-13 kW'], ['Solar Output', '1 kW', '-11 kW'], ['Battery SOC', '61%', '-12%'], ['Diesel Output', '71 kW', '+28 kW'], ['CO₂ Emissions', '15.6 kg/hr', '+3.8']];
