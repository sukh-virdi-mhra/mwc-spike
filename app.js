const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();

app.use('/stylesheets', express.static(path.join(__dirname, './node_modules/govuk-frontend/dist/govuk')));
app.use('/javascripts', express.static(path.join(__dirname, './node_modules/govuk-frontend/dist/govuk')));

nunjucks.configure([
  './node_modules/govuk-frontend/dist',
  './views'
], {
  express: app
});

app.get('/', (request, response) => {
    response.render('website-checker.njk');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});