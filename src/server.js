'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./auth/middleware/logger');
const v1Routes = require('./auth/route/v1');
const v2Routes = require('./auth/route/v2');

// Esoteric Resources
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const authRoutes = require('./auth/routes');

// Prepare the express app
const app = express();
app.use(express.json());

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);
// Routes
app.use(authRoutes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (PORT) => {
    if (!PORT) { throw new Error('Missing Port'); }
    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });
  },
};

