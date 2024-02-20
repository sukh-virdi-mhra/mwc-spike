const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const testDbConnectionRoute = require('./routes/testDbConnection');
const submitFormRoute = require('./routes/submitForm');
const pool = require('./config/connection');

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

app.use('/', testDbConnectionRoute);
app.use('/', submitFormRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
