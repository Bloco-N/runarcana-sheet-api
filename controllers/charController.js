const db = require('../models');
const CreateCharacterRequestValidator = require('../validations/CreateCharacterRequest');
const User = db.user;
const Character = db.character;

const makeCharacter = async (id, userId) => {

  const character = await character.findOne({ where: { id } });
  if (!character) throw {
    status: 404,
    message: "Character not found"
  }
  const { dataValues: user } = await character.getUser();

  if (user.id !== userId) throw {
    status: 401,
    message: "You don't have access to this content"
  }

  return character;

}

const create = async (req, res) => {

  const { user: { id }, body } = req;

  try {

    await CreateCharacterRequestValidator.validate(body);
    const response = await Character.create({ user_id: id, ...body })
    return res.status(200).json(response);

  } catch (error) {
    return res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

const list = async (req, res) => {

  const { user } = req;

  try {

    const userResult = await User.findOne({ where: user.id });
    return res.status(200).json(await userResult.getCharacters())

  } catch (error) {
    return res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

const getById = async (req, res) => {

  const { id } = req.params;
  const { user: { id: userId } } = req;

  try {

    const character = await makeCharacter(id, userId);
    return res.status(200).json(await character.toJSON());

  } catch (error) {
    return res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

const update = async (req, res) => {
  const { id } = req.params;
  const { user: { id: userId }, body } = req;

  try {

    await CreateCharacterRequestValidator.validate(body);
    const character = await makeCharacter(id, userId);
    await character.update(body);
    return res.status(200).json({ message: "Character updated", character: await character.toJSON() });


  } catch (error) {
    return res.status(error.status || 500).json({ messsage: error.message || error });
  }
}


const remove = async (req, res) => {
  const { id } = req.params;
  const { user: { id: userId } } = req;

  try {

    const character = await makeCharacter(id, userId);
    character.destroy();
    return res.status(200).json('Character deleted');

  } catch (error) {
    return res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

module.exports = {
  create,
  list,
  getById,
  update,
  remove
}