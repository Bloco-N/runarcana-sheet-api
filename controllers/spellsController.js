const spellsDataOrigin = require('../magias_desc.json');

const listAllSpells = (req, res) => {
  const { hasMaterial } = req.query;

  let spellsData = spellsDataOrigin;

  if (hasMaterial === 'yes') {
    spellsData = spellsData.filter(item => item.materials !== "nenhum");
  } else if (hasMaterial === 'no') {
    spellsData = spellsData.filter(item => item.materials === "nenhum");
  }

  res.json(spellsData)

}

const getSpellByIdOrName = (req, res) => {
  const { idOrName } = req.params;
  let spellsData = spellsDataOrigin;

  spellsData = spellsData.filter(item => item.name === idOrName);
  if (spellsData.length > 0) return res.json(spellsData[0]);
  else {
    spellsData = spellsDataOrigin;
    spellsData = spellsData.filter(item => item.id === Number(idOrName));
    if (spellsData.length > 0) return res.json(spellsData[0]);
    else return res.status(404).json('magia não encontrada');
  }
}
module.exports = {

  listAllSpells,
  getSpellByIdOrName,
}