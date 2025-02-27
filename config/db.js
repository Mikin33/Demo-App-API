const { Sequelize } = require("sequelize");
require("dotenv").config();

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // Path to the SQLite file
  logging: false, // Disable logging (optional)
});

module.exports = sequelize;

