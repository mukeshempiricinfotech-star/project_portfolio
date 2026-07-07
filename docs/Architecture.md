# Architecture — CRM System CS-2026-001

## Scope
The CRM created for ABC Company from 05 Jan–26 Jun 2026 uses a React single-page application, versioned Express/Node.js REST API, PostgreSQL system of record, Redis caching/job coordination, and AWS deployment through GitHub Actions.

## Boundaries
Browser requests terminate at the API. Controllers validate HTTP concerns; services enforce ownership and business rules; Sequelize models map domain records; PostgreSQL foreign keys protect accounts, contacts, deals, tickets, and comments. Redis stores short-lived report aggregates and integration retry state—never the system of record.

## Security
JWT access tokens expire after 15 minutes; refresh tokens rotate. Roles are Admin, Sales, Support, and Analyst. Services enforce resource ownership and serializers omit financial fields from Support responses. Rate limiting covers public/auth endpoints. AWS credentials use OIDC, not repository secrets.

## Reliability
Database migrations run before an immutable ECS image is deployed. Health checks, structured request ids, SendGrid idempotency keys, encrypted backups, and rollback instructions are required release gates. Related detail: [Technical design](./Technical_Design.md), [API](./API_Documentation.md), [deployment](./Deployment_Guide.md).