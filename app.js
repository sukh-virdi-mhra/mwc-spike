const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const pool = require('./connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/test-db-connection', async (req, res) => {
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/stylesheets', express.static(path.join(__dirname, './node_modules/govuk-frontend/dist/govuk')));
app.use('/javascripts', express.static(path.join(__dirname, './node_modules/govuk-frontend/dist/govuk')));

nunjucks.configure([
  './node_modules/govuk-frontend/dist',
  './views'
], {
  express: app
});

app.get('/', (req, res) => {
  res.render('question.njk');
});

app.post('/submit', async (req, res) => {
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
