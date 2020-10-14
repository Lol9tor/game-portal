const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const routes = require('./routes/router.js');
// const Errors = require('../helpers/errors.js');
// const addPagination = require('../helpers/pagination');

dotenv.config();

const env = process.env.NODE_ENV || 'production';
const port = process.env.HTTP_PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(addPagination);

app.use('/api', routes);
// app.use(Errors.handleError);

app.listen(port, () => console.info(`[ApiServer] Listening on Port ${port} / at ${env} Env`));
