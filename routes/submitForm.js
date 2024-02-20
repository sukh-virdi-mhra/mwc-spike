const express = require('express');
const router = express.Router();
const pool = require('../config/connection');

router.post('/submit', async (req, res) => {
  const { websiteLink } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO form_data (website_link) VALUES ($1)', [websiteLink]);
    client.release();
    res.send('Form data submitted successfully!');
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('An error occurred while processing your request.');
  }
});

module.exports = router;
