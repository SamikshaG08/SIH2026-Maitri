export const dispatchPlan = [
  { hour: '00', wind: 72, solar: 0, diesel: 48, battery: 0 }, { hour: '01', wind: 76, solar: 0, diesel: 40, battery: 0 },
  { hour: '02', wind: 78, solar: 0, diesel: 34, battery: 0 }, { hour: '03', wind: 81, solar: 0, diesel: 32, battery: 0 },
  { hour: '04', wind: 84, solar: 0, diesel: 30, battery: 0 }, { hour: '05', wind: 86, solar: 0, diesel: 34, battery: 0 },
  { hour: '06', wind: 86, solar: 4, diesel: 40, battery: 0 }, { hour: '07', wind: 87, solar: 6, diesel: 42, battery: 0 },
  { hour: '08', wind: 88, solar: 7, diesel: 45, battery: 0 }, { hour: '09', wind: 84, solar: 8, diesel: 48, battery: 0 },
  { hour: '10', wind: 80, solar: 10, diesel: 50, battery: 0 }, { hour: '11', wind: 77, solar: 12, diesel: 48, battery: 0 },
  { hour: '12', wind: 74, solar: 13, diesel: 44, battery: 0 }, { hour: '13', wind: 70, solar: 12, diesel: 52, battery: 0 },
  { hour: '14', wind: 68, solar: 9, diesel: 46, battery: 0 }, { hour: '15', wind: 64, solar: 7, diesel: 37, battery: 0 },
  { hour: '16', wind: 62, solar: 5, diesel: 46, battery: 0 }, { hour: '17', wind: 59, solar: 3, diesel: 43, battery: 0 },
  { hour: '18', wind: 57, solar: 0, diesel: 48, battery: 0 }, { hour: '19', wind: 55, solar: 0, diesel: 50, battery: 0 },
  { hour: '20', wind: 55, solar: 0, diesel: 54, battery: 0 }, { hour: '21', wind: 57, solar: 0, diesel: 48, battery: 0 },
  { hour: '22', wind: 60, solar: 0, diesel: 45, battery: 0 }, { hour: '23', wind: 64, solar: 0, diesel: 42, battery: 0 },
];

export const batterySchedule = [
  { hour: '00', value: -10 }, { hour: '01', value: -3 }, { hour: '02', value: -11 }, { hour: '03', value: -7 },
  { hour: '04', value: -8 }, { hour: '05', value: -10 }, { hour: '06', value: 15 }, { hour: '07', value: 20 },
  { hour: '08', value: 14 }, { hour: '09', value: 16 }, { hour: '10', value: 14 }, { hour: '11', value: 18 },
  { hour: '12', value: 8 }, { hour: '13', value: -9 }, { hour: '14', value: -5 }, { hour: '15', value: -3 },
  { hour: '16', value: -10 }, { hour: '17', value: -4 }, { hour: '18', value: -3 }, { hour: '19', value: -7 },
  { hour: '20', value: -9 }, { hour: '21', value: -7 }, { hour: '22', value: -10 }, { hour: '23', value: -6 },
];

export const generatorRecommendations = [
  ['00:00-06:00', 'G1 only', 'OPTIMAL', '22-32 kW', 'Low load, max renewable', 'optimal'],
  ['06:00-14:00', 'G1 + G2', 'ACTIVE', '43-53 kW', 'High occupancy + drill ops', 'active'],
  ['14:00-20:00', 'G1 only', 'PLANNED', '38-48 kW', 'High wind, reduce diesel', 'planned'],
  ['20:00-24:00', 'G1 only', 'PLANNED', '30-42 kW', 'Low load recovery', 'planned'],
];
