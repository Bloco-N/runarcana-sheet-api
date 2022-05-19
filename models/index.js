const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const { DATABASE_URL } = process.env;

sequelize = new Sequelize(DATABASE_URL);

(async () => {
  try {

    await sequelize.authenticate()
    console.log('Successful database connection');
    // await sequelize.sync({ alter: true });
    // console.log("All models were synchronized successfully.");

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

db.spell = require('./Spell.js')(sequelize, Sequelize, DataTypes);
db.magicalSource = require('./MagicalSource.js')(sequelize, Sequelize, DataTypes);
db.mystery = require('./Mystery.js')(sequelize, Sequelize, DataTypes);
db.component = require('./Component.js')(sequelize, Sequelize, DataTypes);
db.origin = require('./Origin.js')(sequelize, Sequelize, DataTypes);
db.conjuration = require('./Conjuration.js')(sequelize, Sequelize, DataTypes);
db.duration = require('./Duration.js')(sequelize, Sequelize, DataTypes);
db.range = require('./Range.js')(sequelize, Sequelize, DataTypes);
db.spellBook = require('./SpellBook.js')(sequelize, Sequelize, DataTypes);
db.spellComponent = require('./SpellComponent.js')(sequelize, Sequelize, DataTypes);
db.spellMystery = require('./SpellMystery.js')(sequelize, Sequelize, DataTypes);
db.spellOrigin = require('./SpellOrigin.js')(sequelize, Sequelize, DataTypes);
db.spellClass = require('./SpellClass.js')(sequelize, Sequelize, DataTypes);
db.past = require('./Past.js')(sequelize, Sequelize, DataTypes);
db.region = require('./Region.js')(sequelize, Sequelize, DataTypes);
db.lineage = require('./Lineage.js')(sequelize, Sequelize, DataTypes);
db.spellLineage = require('./SpellLineage.js')(sequelize, Sequelize, DataTypes);

db.element = require('./Element.js')(sequelize, Sequelize, DataTypes);
db.charElement = require('./CharElement.js')(sequelize, Sequelize, DataTypes);


//spell-conjuration associations
db.spell.belongsTo(db.conjuration, { foreignKey: 'conjuration_id' })
db.conjuration.hasMany(db.spell, { foreignKey: 'conjuration_id' })
//spell-duration associations
db.spell.belongsTo(db.duration, { foreignKey: 'duration_id' })
db.duration.hasMany(db.spell, { foreignKey: 'duration_id' })
//spell-range associations
db.spell.belongsTo(db.range, { foreignKey: 'range_id' })
db.range.hasMany(db.spell, { foreignKey: 'range_id' })
//spellbook associantions
db.spell.belongsToMany(db.character, { through: db.spellBook, foreignKey: 'spell_id', otherKey: 'char_id' })
db.character.belongsToMany(db.spell, { through: db.spellBook, foreignKey: 'char_id', otherKey: 'spell_id' })
//spell-origin associations
db.spell.belongsToMany(db.origin, { through: db.spellOrigin, foreignKey: 'spell_id', otherKey: 'origin_id' })
db.origin.belongsToMany(db.spell, { through: db.spellOrigin, foreignKey: 'origin_id', otherKey: 'spell_id' })
//spell-mystery associations
db.spell.belongsToMany(db.mystery, { through: db.spellMystery, foreignKey: 'spell_id', otherKey: 'mystery_id' })
db.mystery.belongsToMany(db.spell, { through: db.spellMystery, foreignKey: 'mystery_id', otherKey: 'spell_id' })
//spell-component associations
db.spell.belongsToMany(db.component, { through: db.spellComponent, foreignKey: 'spell_id', otherKey: 'component_id' })
db.component.belongsToMany(db.spell, { through: db.spellComponent, foreignKey: 'component_id', otherKey: 'spell_id' })
//spell-class associations
db.spell.belongsToMany(db.runarcanaClass, { through: db.spellClass, foreignKey: 'spell_id', otherKey: 'class_id' })
db.runarcanaClass.belongsToMany(db.spell, { through: db.spellClass, foreignKey: 'class_id', otherKey: 'spell_id' })
//char-origin associations
db.character.belongsTo(db.origin, { foreignKey: 'origin_id' })
db.origin.hasMany(db.character, { foreignKey: 'origin_id' })
//char-past associations
db.character.belongsTo(db.past, { foreignKey: 'past_id' })
db.past.hasMany(db.character, { foreignKey: 'past_id' })
//char-region associantions
db.character.belongsTo(db.region, { foreignKey: 'region_id' })
db.region.hasMany(db.character, { foreignKey: 'region_id' })

db.lineage.belongsTo(db.origin, { foreignKey: 'origin_id' })
db.origin.hasMany(db.lineage, { foreignKey: 'origin_id' })

db.character.belongsTo(db.lineage, { foreignKey: 'lineage_id' })
db.lineage.hasMany(db.character, { foreignKey: 'lineage_id' })

db.spell.belongsToMany(db.lineage, { through: db.spellLineage, foreignKey: 'spell_id', otherKey: 'lineage_id' })
db.lineage.belongsToMany(db.spell, { through: db.spellLineage, foreignKey: 'lineage_id', otherKey: 'spell_id' })

db.mystery.belongsTo(db.magicalSource, { foreignKey: 'source_id' });
db.magicalSource.hasMany(db.mystery, { foreignKey: 'source_id' });

db.character.belongsToMany(db.element, { through: db.charElement, foreignKey: 'char_id', otherKey: 'element_id' })
db.element.belongsToMany(db.character, { through: db.charElement, foreignKey: 'element_id', otherKey: 'char_id' })

module.exports = db;