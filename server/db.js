const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "<pswd>",
  host: "localhost",
  port: 5432,
  database: "<database_name>",
});

module.exports = pool;
