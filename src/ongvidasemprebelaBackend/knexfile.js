// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  client: 'postgresql',
  connection: {
    database: 'ongvidasemprebeladb',
    user: 'postgres',
    password: 'senha1230'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
