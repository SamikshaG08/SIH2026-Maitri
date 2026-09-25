# Frontend

The frontend will be a React and Vite single-page application based on the approved Figma prototype.

## Planned Architecture

- `components/`: reusable UI grouped by shared and domain-specific modules
- `pages/`: route-level screens such as Dashboard, Storage, Dispatch, Alerts, Digital Twin, and Reports
- `services/`: Axios clients and API request functions
- `hooks/`: reusable stateful React hooks
- `context/`: application-wide state providers when shared state is established
- `utils/`: small presentation and data-formatting helpers
- `assets/`: local images, icons, and other static resources

The current `App.jsx` is only a startup placeholder. React Router, Axios, Recharts, authentication, and module screens will be introduced when their contracts are ready.

// TODO: Implement the Figma-based application shell and route structure.

