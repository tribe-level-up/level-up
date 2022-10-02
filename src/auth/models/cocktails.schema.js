'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('cocktail', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base: {
      type: DataTypes.ENUM,
      values: ['vodka', 'gin', 'rum', 'whiskey', 'brandy', 'tequila'],
      allowNull: true,
    },
    flavor: {
      type: DataTypes.ENUM,
      values: ['astringent','bitter', 'boozey', 'cool', 'salty', 'sour', 'spicy', 'sweet',  'umami'],
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
