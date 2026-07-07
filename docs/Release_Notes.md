# Release notes

## v0.1.0 — 16 Jan 2026
Initial project scaffold: Docker-based API and data services, React navigation shell, PostgreSQL accounts/contacts schema, migration runner, JWT design, and continuous-integration baseline.

## v0.5.0 — 29 May 2026
Feature-complete beta: contact/account CRUD and CSV migration, searchable contacts, pipeline deal board and forecasts, support ticket lifecycle, analytics dashboards, Admin/Sales/Support/Analyst authorization, SendGrid/calendar integration adapters, report caching, and regression coverage. Known launch gate: complete SendGrid retry reconciliation and final load test.

## v1.0.0 — 26 Jun 2026
Production release accepted by ABC Company. Fixed all nine seeded defect scenarios including 500-row contact pagination, inclusive forecast dates, UTC SLA calculations, rotated-refresh-token races, integration idempotency, and scoped report caches. GitHub Actions deploys immutable images to AWS; backup restore and rollback checks passed on 24 Jun 2026. Client satisfaction status: Completed.