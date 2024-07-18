const { Client } = require("pg");

const client = new Client({
    user: 'your_username',          // Replace with your PostgreSQL username
    host: 'localhost',             // Replace with your PostgreSQL host
    database: 'biztime',           // Replace with your PostgreSQL database name
    password: 'your_password',      // Replace with your PostgreSQL password
    port: 5432                     // Replace with your PostgreSQL port
});

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack);
    } else {
        console.log('connected to the database');
    }
});

module.exports = client;

