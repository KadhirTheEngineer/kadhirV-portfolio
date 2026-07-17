interface Env {
  DB: D1Database;
  ALLOWED_ORIGIN: string;
  IP_HASH_SECRET: string;
}

const json = (data: unknown, status: number, origin: string) =>
  Response.json(data, {
    status,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Accept',
      'Cache-Control': 'no-store',
      Vary: 'Origin',
    },
  });

const hashVisitor = async (ip: string, day: string, secret: string) => {
  const bytes = new TextEncoder().encode(`${secret}:${day}:${ip}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') ?? '';
    const allowedOrigins = new Set([env.ALLOWED_ORIGIN, 'http://127.0.0.1:4321', 'http://localhost:4321']);

    if (origin && !allowedOrigins.has(origin)) {
      return json({ error: 'Origin not allowed' }, 403, env.ALLOWED_ORIGIN);
    }

    const responseOrigin = origin || env.ALLOWED_ORIGIN;
    if (request.method === 'OPTIONS') return json({}, 204, responseOrigin);

    if (request.method === 'GET') {
      const counter = await env.DB.prepare("SELECT count FROM counters WHERE id = 'site'").first<{ count: number }>();
      const count = counter?.count ?? 0;
      return json({ count, next: count + 1 }, 200, responseOrigin);
    }

    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, responseOrigin);

    const ip = request.headers.get('CF-Connecting-IP');
    if (!ip || !env.IP_HASH_SECRET) return json({ error: 'Counter is not configured' }, 503, responseOrigin);

    const day = new Date().toISOString().slice(0, 10);
    const visitorHash = await hashVisitor(ip, day, env.IP_HASH_SECRET);
    const insert = await env.DB.prepare(
      'INSERT OR IGNORE INTO daily_visitors (visitor_hash, visit_day) VALUES (?, ?)'
    )
      .bind(visitorHash, day)
      .run();

    let count: number;
    if (insert.meta.changes === 1) {
      const updated = await env.DB.prepare(
        "UPDATE counters SET count = count + 1 WHERE id = 'site' RETURNING count"
      ).first<{ count: number }>();
      count = updated?.count ?? 0;
    } else {
      const current = await env.DB.prepare("SELECT count FROM counters WHERE id = 'site'").first<{ count: number }>();
      count = current?.count ?? 0;
    }

    return json({ count, counted: insert.meta.changes === 1 }, 200, responseOrigin);
  },
};
