const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const testDBConnection = require('./routes/testDBConnection');
const submitForm = require('./routes/submitForm');
const pool = require('./connection');

const app = express();
const PORT = process.env.PORT || 3000;

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

app.use('/', testDBConnection);
app.use('/', submitForm);

app.get('/', (req, res) => {
  res.render('question.njk');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
