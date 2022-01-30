const { DataTypes } = require('sequelize');
// Export model definition function with injected sequelize connection
module.exports = (sequelize) => {
  // Model definition
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: DataTypes.STRING,
    area: DataTypes.INTEGER,
    population: DataTypes.INTEGER
  });
};