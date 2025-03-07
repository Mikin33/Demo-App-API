const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");
const productsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", productsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  }
};
