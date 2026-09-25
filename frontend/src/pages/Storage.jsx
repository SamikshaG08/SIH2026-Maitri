import StorageCard from '../components/storage/StorageCard.jsx';
import StorageSocChart from '../components/storage/StorageSocChart.jsx';
import { batterySocHistory, storageSystems } from '../data/storageData.js';
import './Storage.css';

export default function Storage() {
  return <div className="storage-page"><div className="dashboard-heading storage-heading"><div><h1>Storage</h1><p>BESS 800 kWh · Diesel 4,200 L · H₂ 250 kg · Thermal store</p></div><div className="refresh-status"><i /> Auto-refresh 30s&nbsp; | &nbsp;Ψ-7 - 78°S 163°W</div></div><div className="storage-card-grid">{storageSystems.map((system) => <StorageCard key={system.title} {...system} />)}</div><StorageSocChart data={batterySocHistory} /></div>;
}
