const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const { DATABASE_URL } = process.env;

sequelize = new Sequelize(DATABASE_URL);

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
db.character = require('./Character.js')(sequelize, Sequelize, DataTypes);
db.runarcanaClass = require('./RunarcanaClass.js')(sequelize, Sequelize, DataTypes);
db.charClass = require('./CharClass.js')(sequelize, Sequelize, DataTypes);
db.user.hasMany(db.character, { foreignKey: 'user_id' });
db.character.belongsTo(db.user, { foreignKey: 'user_id' });
db.runarcanaClass.belongsToMany(db.character, { through: db.charClass, foreignKey: 'class_id', otherKey: 'char_id' })
db.character.belongsToMany(db.runarcanaClass, { through: db.charClass, foreignKey: 'char_id', otherKey: 'class_id' })

module.exports = db;