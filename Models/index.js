const { Sequelize, DataTypes } = require('sequelize');
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

db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require('./User.js')(sequelize, Sequelize, DataTypes);
db.sheet = require('./Sheet.js')(sequelize, Sequelize, DataTypes);
db.charClass = require('./CharClass.js')(sequelize, Sequelize, DataTypes);
db.sheetClass = require('./SheetClass.js')(sequelize, Sequelize, DataTypes);
db.user.hasMany(db.sheet, { foreignKey: 'user_id' });
db.sheet.belongsTo(db.user, { foreignKey: 'user_id' });
db.charClass.belongsToMany(db.sheet, { through: db.sheetClass, foreignKey: 'class_id', otherKey: 'sheet_id' })
db.sheet.belongsToMany(db.charClass, { through: db.sheetClass, foreignKey: 'sheet_id', otherKey: 'class_id' })

module.exports = db;