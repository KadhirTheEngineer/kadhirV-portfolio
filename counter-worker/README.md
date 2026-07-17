# Portfolio visitor counter

A deliberately minimal Cloudflare Worker backed by one D1 counter row. A visit is recorded only when the homepage scroll trigger becomes visible.

Raw IP addresses are never stored. The Worker hashes the connecting IP with a secret and the UTC date, then uses that daily hash to count a network at most once per day.

## Cloudflare setup

1. Install dependencies with `npm install` in this directory.
2. Authenticate Wrangler with `npx wrangler login`.
3. Create the database with `npx wrangler d1 create portfolio-visitor-counter`.
4. Put the returned database ID in `wrangler.jsonc`.
5. Initialize it with `npm run db:init:remote`.
6. Add a hashing secret with `npx wrangler secret put IP_HASH_SECRET`.
7. Deploy with `npm run deploy`.
8. Set `PUBLIC_VISITOR_COUNTER_URL` to the deployed Worker URL when building the Astro site.

For local portfolio development, no Worker is required. The homepage uses a browser-local demo counter when `PUBLIC_VISITOR_COUNTER_URL` is absent.
