# A.A. Engineering & Constructions Website

## Overview

This is a modern, elegant website for A.A. Engineering & Constructions, a premier structural design and building company based in Dhaka, Bangladesh. The application is built using a React frontend with Express.js backend, featuring a PostgreSQL database for contact form submissions and a comprehensive UI built with shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom engineering-themed color variables
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM
- **Validation**: Zod schemas shared between client and server
- **Session Storage**: In-memory storage (development) with PostgreSQL support configured

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Contact Submissions Table**: Stores contact form submissions with name, phone, email, message, and timestamp
- **Shared Schemas**: Zod validation schemas used across frontend and backend

### API Structure
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact-submissions` - Retrieve all contact submissions

### Frontend Pages
- **Home Page**: Complete single-page application with navigation, hero section, about, services, portfolio, why choose us, contact form, and footer
- **404 Page**: Not found page for undefined routes

### UI Components
- Comprehensive set of shadcn/ui components including forms, navigation, dialogs, toasts
- Custom components for each website section (hero, about, services, portfolio, contact, footer)
- Responsive design with mobile-first approach

## Data Flow

1. **Contact Form Submission**: Form data is validated on client-side using Zod, submitted to backend API, validated again, stored in database, and user receives toast notification
2. **Navigation**: Smooth scrolling navigation between page sections
3. **Responsive Interactions**: Mobile-friendly navigation with hamburger menu and touch-optimized interactions

## External Dependencies

### Production Dependencies
- **UI Framework**: React, Radix UI components, shadcn/ui
- **Database**: Neon Database serverless PostgreSQL driver
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Forms**: React Hook Form, Hookform resolvers
- **HTTP Client**: TanStack Query for data fetching
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for portfolio section

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **Database Tools**: Drizzle Kit for database migrations and schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database**: Drizzle handles PostgreSQL schema migrations

### Environment Configuration
- **Development**: Uses NODE_ENV=development with hot reloading
- **Production**: Serves static files and runs optimized backend
- **Database**: Configured for PostgreSQL with environment variable `DATABASE_URL`

### Scripts
- `npm run dev` - Development server with hot reloading
- `npm run build` - Production build for both frontend and backend
- `npm start` - Production server
- `npm run db:push` - Apply database schema changes

The application is designed to showcase A.A. Engineering & Constructions' services including architectural drawing, structural design, site supervision, electrical/plumbing design, 3D modeling, construction estimation, interior design, bank valuation reports, digital surveying, soil testing, and plan approval through various regulatory bodies.