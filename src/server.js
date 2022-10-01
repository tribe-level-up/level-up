'use strict';

const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const v1Routes = require('./auth/routes/v1');
const authRoutes = require('./auth/routes/router');
// const foodsRouter = require('./auth/routes/foods');
// const cocktailsRouter = require('./auth/routes/cocktails');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.json());

// app.use(cors());
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(v1Routes);
app.use(authRoutes);
// app.use(foodsRouter);
// app.use(cocktailsRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('hello world');
});

app.get('/500-test', (req, res, next) => {
  next('server error');
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {app, start};
