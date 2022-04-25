const { Sequelize } = require('sequelize');
require('dotenv').config()
const { DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

(async () => {
  try {

    await sequelize.authenticate()
    console.log('Successful database connection');
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");

  } catch (error) {
    console.error(`Connection Failed with error: ${error}`);
  }
})();


module.exports = sequelize;