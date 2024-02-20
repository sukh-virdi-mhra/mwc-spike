const express = require('express');
const router = express.Router();
const pool = require('../config/connection');

router.get('/test-db-connection', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT $1::text as message', ['Database connection test successful']);
    const message = result.rows[0].message;
    client.release();
    res.send(`Connection test successful: ${message}`);
  } catch (err) {
    console.error('Error connecting to database', err);
    res.status(500).send('Error connecting to database');
  }
});

module.exports = router;
