const pg = require('pg');

const client = new pg.Client({
  user: "postgres",
  password: "crieti",
  host: "177.44.248.52",
  port: 5432,
  database: "curso"
});

client.connect();

module.exports = client;