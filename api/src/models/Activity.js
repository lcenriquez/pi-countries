const { DataTypes } = require('sequelize');
// Export model definition function with injected sequelize connection
module.exports = (sequelize) => {
  // Model definition
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.ENUM(['Spring', 'Summer', 'Autumn', 'Winter']),
      allowNull: false
    }
  });
};