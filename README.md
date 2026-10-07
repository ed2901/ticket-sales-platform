# Ticket Sales Platform

Modern ticketing platform for concerts, festivals, live shows, and premium events.

## Features

- Premium event discovery and category browsing
- Secure login and registration flow
- Event detail and ticket selection pages
- Checkout and order summary flow
- Admin and dashboard sections
- Prisma + PostgreSQL-ready schema
- Stripe-ready payment setup

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- NextAuth
- Prisma
- PostgreSQL
- Stripe

## Quick start

1. Install dependencies:
   npm install
2. Configure environment variables:
   cp .env.example .env
3. Create your PostgreSQL database and update `DATABASE_URL`
4. Run Prisma migrations:
   npx prisma generate
   npx prisma db push
   npx prisma db seed
5. Start the app:
   npm run dev

Open http://localhost:3000
