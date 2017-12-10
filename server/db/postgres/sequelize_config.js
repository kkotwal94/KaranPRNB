module.exports = {
  development: {
    username: process.env.PGUSER || 'postgres',
    password: 'ShadowX113',
    database: 'PassTheAux',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
  },
  test: {
    username: process.env.PGUSER || 'postgres',
    password: 'ShadowX113',
    database: 'PassTheAux',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.PGUSER || 'postgres',
    password: 'localhost',
    database: 'PassTheAux',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
