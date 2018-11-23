const 
    prod = process.env.NODE_ENV === 'production',
    dev = process.env.NODE_ENV === 'dev',
    entities = dev ? "src/**/**.entity.ts" : "dist/**/**.entity.js",
    ssl = prod ? true : false

module.exports = {
    type: "postgres",
    port: 5432,
    url: process.env.DATABASE_URL,
    ssl,
    entities: [
        entities
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
 