export const batterySocHistory = [
  { hour: '00', soc: 68 }, { hour: '02', soc: 65 }, { hour: '04', soc: 67 },
  { hour: '06', soc: 69 }, { hour: '08', soc: 70 }, { hour: '10', soc: 72 },
  { hour: '12', soc: 75 }, { hour: '14', soc: 78 }, { hour: '16', soc: 74 },
  { hour: '18', soc: 70 }, { hour: '20', soc: 68 }, { hour: '22', soc: 66 },
  { hour: '24', soc: 64 },
];

export const storageSystems = [
  {
    title: 'BATTERY BANK - BESS 800 KWH', percent: 73, accent: 'blue',
    details: [['Capacity', '800 kWh LFP', 'normal'], ['Current', '584 kWh charged', 'normal'], ['Power', '+7 kW charging', 'good'], ['Cycles', '1,247 total', 'normal'], ['Temperature', '-14 °C (derated)', 'warning'], ['Cell #4 Temp', '+8 °C anomaly', 'critical'], ['SoH', '96.2%', 'good']],
  },
  {
    title: 'DIESEL RESERVE & GENSETS', percent: 68, accent: 'orange',
    details: [['Tank capacity', '4,200 L', 'normal'], ['Current reserve', '2,840 L', 'critical'], ['Burn rate now', '12.4 L/hr', 'warning'], ['Days remaining', '~9.5 days', 'critical'], ['Resupply ETA', 'Day 12 (est.)', 'normal'], ['Genset G1', 'Running · 43 kW', 'good'], ['Genset G2', 'Standby · warm', 'normal']],
  },
  {
    title: 'HYDROGEN STORAGE SYSTEM', percent: 45, accent: 'purple',
    details: [['Capacity', '250 kg H₂', 'normal'], ['Stored', '112 kg', 'normal'], ['Pressure', '340 bar', 'normal'], ['Electrolyser', 'OFF (low wind)', 'muted'], ['Fuel cell', 'Standby', 'normal'], ['FC Power', '0 kW', 'muted'], ['System temp', '-22 °C (OK)', 'good']],
  },
];
