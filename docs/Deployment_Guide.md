# Deployment guide

## Environments
Developer Docker Compose provides Node.js, PostgreSQL 16, and Redis 7. AWS staging and production use immutable ECR images and ECS services in ap-south-1, managed PostgreSQL, ElastiCache Redis, private subnets, HTTPS load balancing, S3 exports, and CloudWatch.

## Pipeline
GitHub Actions runs lint, Jest tests, integration services, and the React build. A main-branch merge configures AWS OIDC, builds and pushes an image tagged by commit SHA, runs migrations, updates ECS, then polls `/health`. Production requires Priya Sharma’s release approval and Rohan Das’s recorded smoke-test result.

## Configuration
Set DATABASE_URL, REDIS_URL, JWT_SECRET, JWT_REFRESH_SECRET, SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, AWS_REGION, and S3_EXPORT_BUCKET through environment-specific secret stores.

## Rollback
Stop rollout if migrations or smoke tests fail. Redeploy the prior SHA; use backward-compatible expand/migrate/contract database changes. Restore PostgreSQL only for verified data corruption. Verify sign-in, contact search, a deal update, a ticket update, and report generation.

## Observability
Alert on 5xx rate, p95 latency, database saturation, Redis errors, SendGrid dead letters, and failed backups.