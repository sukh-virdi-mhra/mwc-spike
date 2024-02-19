const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();

app.get('/', (request, response) => {
    response.render('template.njk');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});