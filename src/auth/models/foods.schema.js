'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fare: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tastes: {
      type: DataTypes.ENUM,
      values: ['sweet', 'sour', 'bitter', 'spicy', 'salty', 'umami'],
      allowNull: true,
    },
  });
};
