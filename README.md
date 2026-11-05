# PriceWatchHub

PriceWatchHub is a modern price monitoring application for tracking products from Mercado Livre and receiving alerts when prices drop to a target value. The project combines a polished landing page, a responsive dashboard, and a Node.js/Express backend with a React frontend.

## Features

- Product tracking dashboard for monitored items
- Price target configuration per product
- Price history visualization
- Light/dark theme support
- English/Portuguese language toggle
- Responsive UI for desktop and mobile
- Session-based authentication flow
- Modern design using React, Vite, Tailwind CSS, and Radix UI

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Wouter for routing
- TanStack Query for data fetching and caching
- Radix UI and shadcn/ui-style components
- Recharts for charting

### Backend
- Node.js
- Express.js
- Drizzle ORM
- PostgreSQL-ready database layer
- Session-based authentication with Passport and bcrypt

## Project Structure

```text
.
├── client/                 # React frontend
│   ├── src/
│   └── public/
├── server/                 # Express server and API routes
├── shared/                 # Shared schemas and types
├── drizzle.config.ts       # Drizzle configuration
├── package.json            # Scripts and dependencies
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── README.md               # Project documentation
├── LICENSE                 # MIT license
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/JoaoPauloK/PriceWatchHub.git
cd PriceWatchHub
```

2. Install dependencies:

```bash
npm install
```

3. Start the app in development mode:

```bash
npm run dev
```

The frontend and API will be served through the local development workflow configured by the project.

## Available Scripts

```bash
npm run dev      # start the development server
npm run build    # build the frontend and backend
npm run start    # start the production build
npm run check    # run TypeScript checks
npm run db:push  # push Drizzle schema changes to the database
```

## Application Notes

This project is a strong foundation for a product price tracking platform. Some features are intentionally implemented as UI mockups or placeholder data while the project continues toward a production-ready workflow.

Examples of current placeholders include:
- demo product cards and mock notification content
- mock price history data in the dashboard
- authentication flow UI with session-ready backend structure
- database abstraction prepared for PostgreSQL/Drizzle integration

## Contributing

Contributions are welcome. If you would like to improve the app, please open an issue or submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
