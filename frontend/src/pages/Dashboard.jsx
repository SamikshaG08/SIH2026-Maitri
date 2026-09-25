import { useEffect, useState } from 'react';
import DemoTag from '../components/common/DemoTag.jsx';
import Panel from '../components/common/Panel.jsx';
import MetricCard from '../components/dashboard/MetricCard.jsx';
import BatteryCard from '../components/dashboard/BatteryCard.jsx';
import LoadGenerationChart from '../components/charts/LoadGenerationChart.jsx';
import GenerationMixChart from '../components/charts/GenerationMixChart.jsx';
import { DataQualityCard, EmissionsCard, HealthCard, PeakCard } from '../components/dashboard/InsightCards.jsx';

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);
        const response = await fetch('/api/dashboard');

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setDashboard(data);
        setError('');
      } catch (loadError) {
        setError(loadError.message || 'Unable to load dashboard data.');
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const station = dashboard?.station ?? { name: 'Maitri', status: 'ACTIVE' };
  const assets = dashboard?.assets ?? [];
  const onlineAssets = assets.filter((asset) => asset.status === 'ONLINE').length;

  const metrics = [
    {
      eyebrow: 'STATION',
      value: station.name || 'Maitri',
      unit: '',
      detail: `${station.status || 'ACTIVE'} status`,
      accent: 'blue',
      badge: 'LIVE DATA',
    },
    {
      eyebrow: 'TOTAL ASSETS',
      value: String(dashboard?.assetCount ?? 0),
      unit: '',
      detail: 'Registered in SQLite',
      accent: 'green',
    },
    {
      eyebrow: 'ONLINE ASSETS',
      value: String(onlineAssets),
      unit: '',
      detail: 'Currently operational',
      accent: 'yellow',
    },
    {
      eyebrow: 'LAT/LNG',
      value: `${station.latitude ?? '-67.123456'}`,
      unit: '',
      detail: `${station.longitude ?? '68.123456'} E`,
      accent: 'orange',
    },
    {
      eyebrow: 'STATION COUNTRY',
      value: station.country || 'India',
      unit: '',
      detail: 'Antarctic research base',
      accent: 'pale',
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-heading">
        <div>
          <h1>Overview</h1>
          <p>Real-time station energy status · Maitri EMS</p>
        </div>
        <div className="refresh-status"><i /> {loading ? 'Loading live data…' : 'Live backend connection active'}</div>
      </div>

      {error ? (
        <div className="demo-footer" style={{ marginBottom: '1rem', color: '#ffb5a7' }}>
          Live data unavailable: {error}
        </div>
      ) : null}

      <div className="metric-grid">
        {metrics.map((metric, index) => (
          <MetricCard
            key={`${metric.eyebrow}-${index}`}
            eyebrow={metric.eyebrow}
            value={metric.value}
            unit={metric.unit}
            detail={metric.detail}
            accent={metric.accent}
            badge={metric.badge}
          />
        ))}
      </div>

      <LoadGenerationChart />
      <div className="chart-row">
        <GenerationMixChart />
        <BatteryCard />
      </div>
      <div className="insight-row">
        <EmissionsCard />
        <PeakCard />
        <HealthCard />
        <DataQualityCard />
      </div>

      <div className="demo-footer">
        <DemoTag tone="orange" /> Live dashboard values are now coming from the backend API. Asset list: {assets.map((asset) => asset.name).join(', ') || 'No assets loaded'}.
      </div>
    </div>
  );
}

export function PlaceholderPage({ title }) {
  return <Panel eyebrow="MODULE PLACEHOLDER" title={title} className="placeholder-page"><p>This route is reserved for the {title} module.</p><p className="muted">// TODO: Implement after the Overview prototype is approved.</p></Panel>;
}

