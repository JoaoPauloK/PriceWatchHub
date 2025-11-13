# PriceWatch - Mercado Livre Price Monitor

## Overview

PriceWatch is a price monitoring application for Mercado Livre (Brazilian e-commerce platform). Users can track product prices, set target prices, and receive notifications when prices drop to their desired levels. The application features a modern, animated landing page with bilingual support (English/Portuguese) and a dashboard for managing tracked products.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool

**Routing**: Wouter for client-side routing

**State Management**: 
- React Context API for global state (Theme, Language, Authentication)
- TanStack Query (React Query) for server state and API data caching

**UI Component Library**: 
- Radix UI primitives for accessible, unstyled components
- shadcn/ui design system (New York style variant)
- Tailwind CSS for styling with custom design tokens

**Design System**:
- Typography: Inter for UI/body, Space Grotesk for display/headlines
- Color scheme: Custom HSL-based theming with light/dark mode support
- Animation: Custom Tailwind animations for floating orbs, gradient shifts, slide-ups, and hover elevations
- Layout: Responsive grid system with Tailwind breakpoints

**Key Pages**:
- Landing: Marketing page with hero, features, how-it-works, testimonials sections
- Dashboard: Main application interface for managing tracked products
- Authentication: Login, Register, and Forgot Password flows

### Backend Architecture

**Runtime**: Node.js with Express.js server

**API Design**: RESTful API endpoints under `/api` namespace

**Session Management**: 
- express-session middleware for session handling
- Session-based authentication (no JWT)
- Cookie-based session storage with httpOnly and secure flags in production

**Authentication Flow**:
- Password hashing using bcryptjs (10 salt rounds)
- Session userId stored on successful login/registration
- Authentication middleware (`requireAuth`) protects dashboard routes

**Data Storage Strategy**:
- In-memory storage implementation (`MemStorage` class) for development
- Database-ready interface (`IStorage`) designed for PostgreSQL migration
- Drizzle ORM schema defined for PostgreSQL with Neon serverless driver

**Server-Side Rendering**: 
- Vite middleware integration for development with HMR
- Custom logging middleware for API request/response tracking

### Data Models

**Users Table**:
- id (UUID primary key)
- email (unique, not null)
- password (hashed, not null)
- createdAt (timestamp)

**Products Table**:
- id (UUID primary key)
- userId (foreign key reference)
- title (product name)
- imageUrl (product thumbnail)
- url (Mercado Livre product link)
- currentPrice (real/float)
- targetPrice (user-defined alert threshold)
- priceHistory (text array for storing historical prices)
- createdAt, updatedAt (timestamps)

**Data Validation**: Zod schemas generated from Drizzle schemas for runtime validation

### External Dependencies

**Database**: 
- PostgreSQL (via Neon serverless) - configured but using in-memory storage currently
- Drizzle ORM for type-safe database queries and migrations
- Migration files output to `/migrations` directory

**UI Libraries**:
- Radix UI: Comprehensive set of accessible component primitives (accordion, dialog, dropdown, toast, etc.)
- Recharts: Chart library for price history visualization
- Lucide React: Icon library
- cmdk: Command palette component
- vaul: Drawer component

**Form Handling**:
- React Hook Form with @hookform/resolvers
- Zod for schema validation

**Utilities**:
- clsx and tailwind-merge: Class name management
- class-variance-authority: Component variant styling
- date-fns: Date manipulation

**Development Tools**:
- Replit-specific plugins: runtime error overlay, cartographer, dev banner
- TypeScript with strict mode enabled
- esbuild for server bundling in production

**Fonts**: 
- Google Fonts integration (Inter, Space Grotesk, Architects Daughter, DM Sans, Fira Code, Geist Mono)

**Third-Party Services**:
- No external API integrations currently implemented
- Mercado Livre price scraping not yet implemented (placeholder for future)
- Email service for password reset not implemented (placeholder exists)

### Missing Implementations

Several features have placeholder/mock data:
- Price history data (currently mocked in Dashboard component)
- Notification system (mock notifications in NotificationPanel)
- Testimonials (hardcoded mock data)
- Password reset email functionality (UI exists, backend not implemented)
- Actual Mercado Livre price scraping/API integration
- Database persistence (using in-memory storage instead of PostgreSQL)