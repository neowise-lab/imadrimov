import pg from 'pg'
import Project from './project.model.js'

const { Pool } = pg

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false }
})

export default {
  database: pool,
  Project
}