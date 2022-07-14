const { Pool } = require('pg/lib')
require('dotenv').config()

const connectionString = process.env.CONNECTION_STRING

const db = new Pool({ connectionString })

module.exports = db