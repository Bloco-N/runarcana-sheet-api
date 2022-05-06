const spellsDataOrigin = require('../magias_desc.json');
const db = require('../models');
const Spell = db.spell;
const Range = db.range;
const Conjuration = db.conjuration;
const Duration = db.duration;
const Component = db.component;

const listAllSpells = async (req, res) => {
  const { hasMaterial } = req.query;

  const response = await Spell.findAll({
    attributes: ['id', 'name', 'level', 'description', 'materials'],
    include: [
      {
        model: Range,
        attributes: ['name']
      },
      {
        model: Duration,
        attributes: ['name']
      },
      {
        model: Conjuration,
        attributes: ['name']
      },
      {
        model: Component,
        attributes: ['name', 'symbol'],
        through: {
          attributes: []
        }
      }
    ]
  });

  res.status(200).json(response);

}

const getSpellById = async (req, res) => {
  const { id } = req.params;

  try {

    const response = await Spell.findOne({
      where: { id },
      attributes: ['id', 'name', 'level', 'description', 'materials'],
      include: [
        {
          model: Range,
          attributes: ['name']
        },
        {
          model: Duration,
          attributes: ['name']
        },
        {
          model: Conjuration,
          attributes: ['name']
        },
        {
          model: Component,
          attributes: ['name', 'symbol'],
          through: {
            attributes: []
          }
        }
      ]
    }
    );
    if (!response) throw {
      status: 404,
      message: 'speel not found'
    }
    return res.status(200).json(response.toJSON());

  } catch (error) {
    return res.status(error.status || 500).json({ message: `An error ocurred: ${error.message || error}` });
  }

  res.json({});

}
module.exports = {

  listAllSpells,
  getSpellById,
}