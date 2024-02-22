const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://revive_cjk9_user:PhODRmThAQVx0UoTvsW0U4nZ372Uk4Ko@dpg-cnbpmied3nmc73ai9c6g-a/revive_cjk9'

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;