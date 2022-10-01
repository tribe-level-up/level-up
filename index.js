'use strict';

require('dotenv').config();

const {sequelizeDatabase} = require('./src/auth/models');
const {start} = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successful connection');
    start(process.env.PORT || 3002);
  })
  .catch(error => console.error(error));


