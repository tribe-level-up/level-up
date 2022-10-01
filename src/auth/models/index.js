'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const foodsSchema = require('./foods.schema');
const cocktailsSchema = require('./cocktails.schema');
const userModel = require('./users');
const Collection = require('./data-collection.js');
const DATABASE_URL = process.env.DATABASE_URL;

// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite::memory'
//   : process.env.DATABASE_URL;

// Uncomment for production; Comment out for Development
const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Uncomment for development. Comment out for production
// const sequelizeDatabase = new Sequelize(DATABASE_URL, {});

const FoodsModel = foodsSchema(sequelizeDatabase, DataTypes);
const CocktailsModel = cocktailsSchema(sequelizeDatabase, DataTypes);
const users = userModel(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  foods: new Collection(FoodsModel),
  cocktails: new Collection(CocktailsModel),
  users,
};
