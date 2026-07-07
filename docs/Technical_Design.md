# Technical design

## Core data model
Account owns Contacts and Deals. Contact has normalized email plus tags and may have Tickets. Deal records stage, amount, probability, closeDate, and owner. Ticket records lifecycle timestamps, priority, assignee, and comments. UUIDs and database foreign keys prevent orphaned domain records.

## Contact design
Search uses bounded `ILIKE`/trigram matching and GIN tag indexes. Stable ordering includes id to prevent duplicates when data exceeds 500 rows. The CSV migration path validates required names, email domain shape, account mapping, and reports duplicate candidates.

## Pipeline and reports
Deal stage changes are audited. Expected value is amount × probability/100, with inclusive DATE boundaries. Aggregates are cached in Redis with role/user/team/filter hash and version. UI optimistic mutations snapshot and restore cached state on error.

## Integrations
emailService uses SendGrid with a CRM event id. Retry jobs are capped, reconciled against provider webhooks, and moved to a dead-letter state after exhaustion.

## Testing
Unit tests cover services/handlers. Supertest integration tests verify authentication and contact endpoints. Targeted regressions cover Jira defects CSP-44 through CSP-52.