# API documentation

Base URL: `/api/v1`. Authentication: `Authorization: Bearer <JWT>`. Errors use `{"error":"message","requestId":"..." }`.

## Authentication
`POST /auth/login` accepts email and password and returns accessToken, refreshToken, and role summary. `GET /auth/me` returns the current account.

## Contacts
`GET /contacts?search=&tag=&page=&limit=` returns stable pagination (updated_at then id). `POST /contacts` requires firstName, lastName, email, and accountId. `GET/PATCH/DELETE /contacts/:id` enforce owner/role scope. CSV migration validates each row and reports duplicates without a partial silent import.

## Deals
`GET/POST /deals`; `PATCH /deals/:id`. Stages: prospect, qualified, proposal, negotiation, won, lost. Forecast end dates are inclusive; values are numeric(14,2).

## Tickets and reports
`GET/POST /tickets`; `PATCH /tickets/:id`. Priority is low, medium, high, urgent. `GET /reports/pipeline` and `/reports/support` take start/end filters. Cache keys include role, user, team, and canonical filters.

SendGrid status events carry a unique event id. All write endpoints validate content type and length.