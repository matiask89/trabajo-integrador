require('dotenv').config();
module.exports = {
    database: {
        connectionString: process.env.DB_CONNECTION_STRING,
    }
}