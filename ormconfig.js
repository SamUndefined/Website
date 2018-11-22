const prod = process.env.NODE_ENV === 'production'

module.exports = {
    type: "postgres",
    port: 5432,
    url: process.env.DATABASE_URL,
    ssl: prod ? true : false,
    entities: [
        "dist/**/**.entity.js"
    ],
    synchronize: false,
    migrationsTableName: "db_migrations",
    migrations: [
        "dist/migration/*.js"
    ],
    cli: {
        "migrationsDir": "migration"
    }
 }
 