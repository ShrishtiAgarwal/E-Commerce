const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://root:password@0.0.0.0:3306/ecommerce');

module.exports = sequelize;