export const forecastTemperature = [
  { time: '00:00', temperature: -24, humidity: 72 }, { time: '04:00', temperature: -25, humidity: 74 },
  { time: '08:00', temperature: -23, humidity: 71 }, { time: '12:00', temperature: -21, humidity: 68 },
  { time: '16:00', temperature: -22, humidity: 70 }, { time: '20:00', temperature: -24, humidity: 74 },
  { time: '24:00', temperature: -24, humidity: 76 },
];
export const forecastWindDemand = [
  { time: '00:00', wind: 16, demand: 72 }, { time: '04:00', wind: 18, demand: 78 },
  { time: '08:00', wind: 16, demand: 118 }, { time: '12:00', wind: 19, demand: 145 },
  { time: '16:00', wind: 17, demand: 126 }, { time: '20:00', wind: 15, demand: 98 },
  { time: '24:00', wind: 17, demand: 76 },
];
export const demandForecast = [
  { time: '00:00', forecast: 72, baseline: 34 }, { time: '02:00', forecast: 72, baseline: 34 },
  { time: '04:00', forecast: 72, baseline: 34 }, { time: '06:00', forecast: 112, baseline: 46 },
  { time: '08:00', forecast: 138, baseline: 54 }, { time: '10:00', forecast: 148, baseline: 55 },
  { time: '12:00', forecast: 126, baseline: 48 }, { time: '14:00', forecast: 72, baseline: 31 },
  { time: '16:00', forecast: 72, baseline: 31 }, { time: '18:00', forecast: 72, baseline: 31 },
  { time: '20:00', forecast: 72, baseline: 31 }, { time: '22:00', forecast: 72, baseline: 31 },
  { time: '24:00', forecast: 72, baseline: 31 },
];
export const renewableForecast = [
  { time: '00', wind: 72, solar: 0 }, { time: '04', wind: 80, solar: 0 },
  { time: '08', wind: 88, solar: 10 }, { time: '12', wind: 75, solar: 14 },
  { time: '16', wind: 60, solar: 0 }, { time: '20', wind: 56, solar: 0 },
  { time: '24', wind: 64, solar: 0 },
];
export const forecastFeatures = [
  ['REAL - NCPOR', 'Air Temperature', '-21.4 °C', 'HIGH', 'real'],
  ['REAL - NCPOR', 'Wind Speed', '18.5 kts / 9.5 m/s', 'HIGH', 'real'],
  ['REAL - NCPOR', 'Relative Humidity', '74 %', 'MEDIUM', 'real'],
  ['REAL - NCPOR', 'Air Pressure', '972.8 mBar', 'MEDIUM', 'real'],
  ['REAL - NCPOR', 'Wind Direction', '248° WSW', 'MEDIUM', 'real'],
  ['SIMULATED', 'Station Occupancy', '14 / 22 bunks', 'MEDIUM', 'simulated'],
  ['SIMULATED', 'Mission Schedule', 'Drill ops + Lab', 'HIGH', 'simulated'],
  ['AI PREDICTION', 'Seasonal Regime', 'Polar winter (day 34)', 'MEDIUM', 'prediction'],
];
