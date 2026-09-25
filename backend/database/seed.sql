PRAGMA foreign_keys = ON;

BEGIN;

INSERT OR IGNORE INTO stations (
    id,
    name,
    country,
    latitude,
    longitude,
    elevation_m,
    status,
    created_at,
    updated_at
)
VALUES (
    '11111111-1111-4111-8111-111111111111',
    'Maitri',
    'India',
    -67.123456,
    68.123456,
    120.00,
    'ACTIVE',
    strftime('%Y-%m-%dT%H:%M:%fZ', 'now'),
    strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
);

INSERT OR IGNORE INTO assets (
    id,
    station_id,
    name,
    asset_type,
    capacity_kw,
    capacity_kwh,
    efficiency,
    status,
    created_at
)
SELECT
    '22222222-2222-4222-8222-222222222222',
    id,
    'Wind Turbine #1',
    'WIND_TURBINE',
    100,
    NULL,
    90,
    'ONLINE',
    strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
FROM stations
WHERE name = 'Maitri';

INSERT OR IGNORE INTO assets (
    id,
    station_id,
    name,
    asset_type,
    capacity_kw,
    status,
    created_at
)
SELECT
    '33333333-3333-4333-8333-333333333333',
    id,
    'Solar Array',
    'SOLAR_PV',
    100,
    'ONLINE',
    strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
FROM stations
WHERE name = 'Maitri';

INSERT OR IGNORE INTO assets (
    id,
    station_id,
    name,
    asset_type,
    capacity_kw,
    status,
    created_at
)
SELECT
    '44444444-4444-4444-8444-444444444444',
    id,
    'Diesel Generator G1',
    'DIESEL_GENERATOR',
    100,
    'ONLINE',
    strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
FROM stations
WHERE name = 'Maitri';

INSERT OR IGNORE INTO assets (
    id,
    station_id,
    name,
    asset_type,
    capacity_kwh,
    status,
    created_at
)
SELECT
    '55555555-5555-4555-8555-555555555555',
    id,
    'BESS',
    'BATTERY',
    800,
    'ONLINE',
    strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
FROM stations
WHERE name = 'Maitri';

INSERT OR IGNORE INTO assets (
    id,
    station_id,
    name,
    asset_type,
    capacity_kwh,
    status,
    created_at
)
SELECT
    '66666666-6666-4666-8666-666666666666',
    id,
    'Hydrogen Storage',
    'HYDROGEN_STORAGE',
    250,
    'ONLINE',
    strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
FROM stations
WHERE name = 'Maitri';

COMMIT;
