const pgp = require('pg-promise')();
const db = pgp({
    host: '192.168.0.2', //TODO 'localhost'
    port: 5433,
    database: 'blog',
    user: 'postgres',
    password: 'postgres'
});

module.exports = db;