const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('m-asca', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;