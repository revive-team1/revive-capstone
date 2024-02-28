const { Client } = require("pg");

// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:54321/revive'
const connectionString =
  process.env.DATABASE_URL ||
  "postgres://mchin:aTzOtd79RYn7NEFv18nIrWDrrKpQuPCt@dpg-cnbqjlacn0vc7388hfqg-a/revive_xp6f";

const client = new Client({
  connectionString,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;
