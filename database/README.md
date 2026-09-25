# Database

The planned database is MySQL. Schema design should follow the API contracts and preserve clear ownership of operational and environmental records.

## Planned Modules

- `users`: station users, roles, and access metadata
- `storage`: storage locations and capacity information
- `inventory`: tracked supplies, quantities, and stock movements
- `dispatch`: dispatch requests, shipments, and delivery status
- `alerts`: alert definitions, severity, status, and acknowledgements
- `environmental_data`: validated Maitri weather and environmental observations
- `reports`: report definitions and generated report metadata

The SQL files are placeholders only. No tables or fake records have been created yet.

