// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
        database: 'basededados',
        user: 'postgres',
        password: '201907Wa'
    },
    pool: {
        min: 1,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};