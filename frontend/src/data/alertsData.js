export const alertSummary = [
  { label: 'CRITICAL', count: '2', detail: '2 active', accent: 'critical', icon: '!' },
  { label: 'WARNINGS', count: '1', detail: '1 active', accent: 'warning', icon: '!' },
  { label: 'ACKNOWLEDGED', count: '3', detail: '3 active', accent: 'good', icon: '3' },
  { label: 'FALLBACK MODE', count: '!', detail: 'Active', accent: 'fallback', icon: '!' },
];

export const alertEvents = [
  { icon: '◈', level: 'CRITICAL', tone: 'critical', title: 'Satellite Uplink Degraded', description: 'Throughput 12% of nominal. Edge-AI mode active. Cloud sync paused.', time: 'Today 14:23 UTC', active: true },
  { icon: '☼', level: 'CRITICAL', tone: 'critical', title: 'Pyranometer #1 Offline', description: 'Solar irradiance sensor fault. Fallback to NWP model estimate.', time: 'Today 09:33 UTC', active: true },
  { icon: '▣', level: 'WARNING', tone: 'warning', title: 'Battery Cell #4 Thermal Anomaly', description: 'Pack temperature +8 °C above nominal. Charge rate derated 30%.', time: 'Today 13:47 UTC', active: true },
  { icon: '◆', level: 'WARNING', tone: 'dim-warning', title: 'Wind Turbine #2 Underperformance', description: 'Output 23% below forecast. Probable blade ice accretion detected.', time: 'Today 12:15 UTC' },
  { icon: '▤', level: 'INFO', tone: 'info', title: 'Diesel Reserve Below 70%', description: 'Current: 2,840 L / 4,200 L. Resupply scheduled in 12 days.', time: 'Today 10:08 UTC' },
  { icon: '◇', level: 'INFO', tone: 'info', title: 'Fallback Mode Engaged', description: 'Local edge controller operating autonomously. Day-ahead plan cached.', time: 'Today 08:45 UTC' },
];

export const resilienceStatus = [
  ['EDGE CONTROLLER', 'ONLINE', 'Local optimization running', 'good'],
  ['CLOUD SYNC', 'DEGRADED', '12% uplink capacity', 'warning'],
  ['CACHED DAY PLAN', 'ACTIVE', 'Plan updated 08:45 UTC', 'blue'],
  ['SENSOR FUSION', 'PARTIAL', '11/13 sensors healthy', 'warning'],
  ['EMERGENCY RUNBACK', 'READY', 'Load shedding pre-armed', 'good'],
  ['ISLANDING MODE', 'STANDBY', 'Auto-trigger on grid fault', 'blue'],
];
