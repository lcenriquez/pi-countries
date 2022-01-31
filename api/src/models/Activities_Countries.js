const { DataTypes } = require('sequelize');
// Export model definition function with injected sequelize connection
module.exports = (sequelize) => {
  // Model definition
  sequelize.define('activities_countries', {}, { timestamps: false });
};