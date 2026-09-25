export const demoNotice = 'DEMO DATA · NOT CONNECTED TO NCPOR';

export const navItems = [
  { label: 'Overview', path: '/', icon: '◇' },
  { label: 'Forecast', path: '/forecast', icon: '▰' },
  { label: 'Dispatch', path: '/dispatch', icon: 'ϟ' },
  { label: 'Storage', path: '/storage', icon: '▣' },
  { label: 'Alerts', path: '/alerts', icon: '♟', count: 3 },
  { label: 'Digital Twin', path: '/digital-twin', icon: '◇' },
  { label: 'Reports', path: '/reports', icon: '▤' },
];

export const loadGenerationData = [
  { hour: '00', actual: 78, forecast: 80 }, { hour: '01', actual: 75, forecast: 77 },
  { hour: '02', actual: 74, forecast: 76 }, { hour: '03', actual: 75, forecast: 76 },
  { hour: '04', actual: 76, forecast: 77 }, { hour: '05', actual: 82, forecast: 81 },
  { hour: '06', actual: 96, forecast: 91 }, { hour: '07', actual: 113, forecast: 109 },
  { hour: '08', actual: 128, forecast: 125 }, { hour: '09', actual: 137, forecast: 133 },
  { hour: '10', actual: 142, forecast: 139 }, { hour: '11', actual: 146, forecast: 143 },
  { hour: '12', actual: 148, forecast: 145 }, { hour: '13', actual: 144, forecast: 145 },
  { hour: '14', actual: 143, forecast: 145 }, { hour: '15', actual: 138, forecast: 141 },
  { hour: '16', actual: 132, forecast: 134 }, { hour: '17', actual: 126, forecast: 128 },
  { hour: '18', actual: 118, forecast: 120 }, { hour: '19', actual: 106, forecast: 108 },
  { hour: '20', actual: 98, forecast: 99 }, { hour: '21', actual: 90, forecast: 92 },
  { hour: '22', actual: 84, forecast: 85 }, { hour: '23', actual: 80, forecast: 81 },
];

export const mixData = [
  { hour: '00', wind: 60, solar: 0, diesel: 18 }, { hour: '02', wind: 56, solar: 0, diesel: 18 },
  { hour: '04', wind: 64, solar: 0, diesel: 14 }, { hour: '06', wind: 72, solar: 5, diesel: 20 },
  { hour: '08', wind: 83, solar: 10, diesel: 42 }, { hour: '10', wind: 91, solar: 13, diesel: 40 },
  { hour: '12', wind: 96, solar: 15, diesel: 39 }, { hour: '14', wind: 94, solar: 13, diesel: 39 },
  { hour: '16', wind: 88, solar: 13, diesel: 42 }, { hour: '18', wind: 79, solar: 8, diesel: 43 },
  { hour: '20', wind: 73, solar: 0, diesel: 29 }, { hour: '22', wind: 66, solar: 0, diesel: 20 },
];

export const batteryData = [
  { hour: '00', value: 68 }, { hour: '02', value: 65 }, { hour: '04', value: 68 },
  { hour: '06', value: 70 }, { hour: '08', value: 72 }, { hour: '10', value: 76 },
  { hour: '12', value: 82 }, { hour: '14', value: 75 }, { hour: '16', value: 72 },
  { hour: '18', value: 69 }, { hour: '20', value: 67 }, { hour: '22', value: 64 },
];

export const emissions = [
  { label: 'Space Heating', value: '12.7 kg/hr · 38%', color: '#ff6330' },
  { label: 'Lab / Science Equip', value: '7.4 kg/hr · 22%', color: '#41b7ff' },
  { label: 'HVAC / Ventilation', value: '3.4 kg/hr · 10%', color: '#00cf9a' },
  { label: 'Water Heating', value: '3.0 kg/hr · 9%', color: '#ffb51b' },
  { label: 'Lighting', value: '2.7 kg/hr · 8%', color: '#af8cff' },
  { label: 'Communications / IT', value: '2.3 kg/hr · 7%', color: '#76a7bf' },
  { label: 'Auxiliary / Misc', value: '2.0 kg/hr · 6%', color: '#365b7c' },
];

export const alerts = [
  { title: 'Satellite Uplink Degraded', time: '14:23 UTC', level: 'critical' },
  { title: 'Pyranometer #1 Offline', time: '09:33 UTC', level: 'critical' },
  { title: 'Battery Cell #4 Thermal Anomaly', time: '13:47 UTC', level: 'warning' },
];

export const systemHealth = [
  { label: 'Edge controller', value: 'OK', tone: 'good' },
  { label: 'Wind turbines', value: '1 alert', tone: 'warning' },
  { label: 'Solar array', value: 'Sensor fault', tone: 'critical' },
  { label: 'Battery BESS', value: 'Cell warn', tone: 'warning' },
  { label: 'Diesel gensets', value: 'OK', tone: 'good' },
];

