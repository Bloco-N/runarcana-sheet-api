const spellsData = require('../magias_desc.json');

const listAllSpells = (req, res) => {

  res.json(spellsData)

}

module.exports = {

  listAllSpells,

}