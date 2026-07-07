# ABC Company CRM System — CS-2026-001

A working reference CRM built from 05 January to 26 June 2026 for ABC Company (Retail and Consumer Goods). It centralizes spreadsheet-based customer data, reduces manual entry, exposes real-time sales pipeline state, and shortens support-ticket resolution time.

## Deliverables
Contact/account management; sales pipeline and deal tracking; support tickets; reporting/analytics; JWT authentication and role-based access control; SendGrid/calendar adapters; Docker/AWS deployment.

## Stack
React, Node.js, Express, PostgreSQL, Redis, Docker, AWS, Jest, GitHub Actions.

## Team
Priya Sharma — Project Manager; Arjun Mehta — Frontend Developer; Neha Iyer — Backend Developer; Rohan Das — QA Engineer; Vikram Singh — DevOps Engineer; Ananya Rao — UI/UX Designer; Karan Patel — Business Analyst.

## Local setup
1. Copy `.env.example` to `.env`.
2. Run `docker compose up --build`, or start PostgreSQL and Redis separately.
3. Run `npm install && npm --prefix backend install && npm --prefix frontend install`.
4. Run migrations in `backend/database/migrations`; then `npm run dev`.
5. Run all tests with `npm test`.

## Environment
`DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `AWS_REGION`, `S3_EXPORT_BUCKET`, `VITE_API_URL`.

## API
Versioned routes live below `/api/v1`: `/auth`, `/contacts`, `/deals`, `/tickets`, and `/reports`. See `docs/API_Documentation.md`.

## Timeline and release markers
- v0.1.0 — 16 Jan 2026: scaffold, contact schema, Express/React skeleton.
- v0.5.0 — 29 May 2026: feature-complete beta and integration hardening.
- v1.0.0 — 26 Jun 2026: production release accepted by ABC Company.
