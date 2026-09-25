import db from '../database.js';

export function getHealth(_request, response) {
  response.json({ status: 'foundation-ready' });
}

export function getStations(_request, response) {
  const stations = db.prepare(`
    SELECT *
    FROM stations
    ORDER BY created_at DESC
  `).all();

  response.json(stations);
}

export function getAssets(_request, response) {
  const assets = db.prepare(`
    SELECT a.*, s.name AS station_name
    FROM assets a
    LEFT JOIN stations s ON s.id = a.station_id
    ORDER BY a.name ASC
  `).all();

  response.json(assets);
}

export function getDashboardSummary(_request, response) {
  const stationCount = db.prepare('SELECT COUNT(*) AS count FROM stations').get().count;
  const assetCount = db.prepare('SELECT COUNT(*) AS count FROM assets').get().count;

  const assetStatusBreakdown = db.prepare(`
    SELECT status, COUNT(*) AS count
    FROM assets
    GROUP BY status
    ORDER BY status
  `).all();

  const station = db.prepare(`
    SELECT id, name, status, country, latitude, longitude
    FROM stations
    ORDER BY name ASC
    LIMIT 1
  `).get();

  const assets = db.prepare(`
    SELECT id, name, asset_type, status, capacity_kw, capacity_kwh
    FROM assets
    ORDER BY name ASC
  `).all();

  response.json({
    stationCount,
    assetCount,
    assetStatusBreakdown,
    station,
    assets,
  });
}
