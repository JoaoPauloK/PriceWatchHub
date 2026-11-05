# Roadmap — PriceWatchHub

PriceWatchHub has a polished React dashboard and authenticated product CRUD, but the current server uses in-memory storage and does not yet fetch Mercado Livre prices. The priority is to make monitoring real and persistent.

## 1. Deliver real product monitoring

- Validate Mercado Livre URLs/IDs and fetch normalized product title, image, availability, and current price from a supported source.
- Add a scheduled worker that checks active products at a configurable interval and appends price observations.
- Detect target-price crossings and prevent duplicate alerts for the same price event.
- Show check status, last successful check, and actionable failure states in the dashboard.

## 2. Replace demo persistence

- Implement a PostgreSQL-backed Drizzle storage adapter and migrations for users, products, price history, and alerts.
- Persist sessions in a production-safe session store and configure secure cookies, CSRF protection, and environment-specific CORS.
- Add retention rules and indexes for efficient history/chart queries.

## 3. Add notifications and user controls

- Deliver alerts by email first, then make additional channels opt-in.
- Let users pause tracking, edit targets, set alert preferences, and delete their data.
- Add product-detail history with useful ranges, price changes, and target progress.

## 4. Quality and deployment

- Add API, worker, and UI tests, including ownership checks and scraper/provider failure scenarios.
- Add structured logging, error monitoring, health checks, and CI for type checking, tests, and builds.
- Document required environment variables, database setup, worker operation, and deployment procedures.
