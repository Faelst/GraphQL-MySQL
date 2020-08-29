// Update with your config settings.
const {connection} = require('./.key')
module.exports = {
  client: "mysql",
  connection: {
    database: 'graphql_prod',
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin'
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
