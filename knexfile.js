module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    }, // needed for SQLITE to true
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
};
