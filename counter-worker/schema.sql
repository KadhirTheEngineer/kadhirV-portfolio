CREATE TABLE IF NOT EXISTS counters (
  id TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS daily_visitors (
  visitor_hash TEXT NOT NULL,
  visit_day TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (visitor_hash, visit_day)
);

INSERT OR IGNORE INTO counters (id, count) VALUES ('site', 0);

CREATE INDEX IF NOT EXISTS daily_visitors_created_at
  ON daily_visitors (created_at);
