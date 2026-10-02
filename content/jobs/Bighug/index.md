---
date: '2026-04-01'
title: 'Software Engineer (Volunteer)'
company: 'Bighug'
location: 'Bellevue, WA'
range: 'Apr 2026 - Present'
url: 'https://bighug.org/'
---

- Built a mobile event web app for a non-profit's one-day offline event using Next.js (App Router), TypeScript, and PostgreSQL with Prisma, serving 500 attendees and volunteers who logged 750 stamp scans and 150 payments.
- Designed a QR-based identity model with no account system: attendees receive an anonymous session cookie from a shared entrance QR, while volunteers authenticate through per-person QR tokens, removing signup friction without letting attendees impersonate a volunteer wallet.
- Diagnosed and fixed a TOCTOU race condition in volunteer wallet deduction that allowed balances to go negative under concurrent payments, replacing read-then-write logic with an atomic conditional update guarded on sufficient balance, verified under concurrent-request stress testing.
- Load-tested production with Locust and traced 12-19s p95 latency to PostgreSQL WAL fsync stalls from shared-disk contention by sampling pg_stat_activity; relaxing commit durability and fixing a separate 500 error cut p95 to 370ms at 150 concurrent users with zero failures.
