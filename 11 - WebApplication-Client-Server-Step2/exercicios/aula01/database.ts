import { Client } from 'pg';

export const db: any = new Client({
  user: "postgres",
  password: "crieti",
  host: "177.44.248.52",
  port: 5432,
  database: "curso"
});

db.connect();

// module.exports = Client;