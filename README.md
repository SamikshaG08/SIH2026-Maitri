# Maitri Station Management System

Smart India Hackathon 2026 project for planning and coordinating operations at India's Antarctic research station, Maitri.

## Problem Overview

Antarctic station operations depend on reliable visibility into supplies, dispatches, environmental conditions, alerts, and historical records. Data is often spread across operational workflows and scientific datasets, making it harder for teams to coordinate decisions in a remote and resource-constrained environment.

## Proposed Solution

Maitri is planned as a modular web platform for station operations and environmental intelligence. It will bring logistics, storage, dispatch, alerts, reports, and a future digital twin into one system, with later AI/ML capabilities for analysis and prediction.

## Main Modules

- Dashboard
- Storage and inventory management
- Dispatch and logistics management
- Alerts and notifications
- Digital twin of the Maitri station and environment
- Reports and analytics
- Historical weather and environmental data
- Future AI/ML prediction capabilities

## Planned Technology Stack

- Frontend: React, Vite, JavaScript, HTML/CSS, Axios, React Router, Recharts
- Backend: Node.js, Express.js, REST APIs
- Database: MySQL
- AI/ML: Python, pandas, NumPy, scikit-learn, Jupyter notebooks
- Data source: NCPOR / National Polar Data Centre, including Maitri AWS, weather, and environmental datasets

## Project Architecture

```text
React Frontend
      |
      v
REST API
      |
      v
Node.js + Express
      |
      v
MySQL Database
      |
      v
AI/ML Layer
      |
      v
Predictions / Alerts / Analytics
```

## Folder Structure

```text
frontend/    React + Vite application
backend/     Node.js + Express REST API
database/    MySQL schema and seed planning
data/        Original and processed NCPOR datasets
ai-ml/       Future notebooks, preprocessing, models, and predictions
docs/        Architecture, API, database, and diagram documentation
```

See each directory's README for its ownership and planned responsibilities.

## Data Source

The project will use datasets from NCPOR / the National Polar Data Centre, including Maitri AWS, weather, and environmental records. NCPOR must be credited wherever its data is used. Original data will be kept unchanged under `data/raw/`.

## Development Roadmap

1. Confirm the Figma flows, domain vocabulary, and team ownership.
2. Define the MySQL schema and API contracts.
3. Add controlled sample data only when the relevant contracts are agreed.
4. Implement authentication and the first operational workflow.
5. Build storage, dispatch, alerts, reports, and dashboard modules incrementally.
6. Integrate approved NCPOR datasets and document their provenance.
7. Add the digital twin and historical visualizations.
8. Explore validated AI/ML models for prediction and decision support.

## Team Contribution

Add team member names, roles, module ownership, and contribution notes here as the team finalizes responsibilities.

## How to Run After Implementation

Install dependencies separately in `frontend/` and `backend/`, then start each development server from its directory:

```bash
cd frontend
npm install
npm run dev
```

```bash
cd backend
npm install
npm run dev
```

The current foundation contains placeholders only. No business logic, fake APIs, credentials, external datasets, or AI/ML models are included.
