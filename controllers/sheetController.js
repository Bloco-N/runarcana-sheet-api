const db = require('../models');
const CreateSheetRequestValidator = require('../validations/CreateSheetRequest');
const User = db.user;
const Sheet = db.sheet;

const makeSheet = async (id, userId) => {

  const sheet = await Sheet.findOne({ where: { id } });
  if (!sheet) throw {
    status: 404,
    message: "Sheet not found"
  }
  const { dataValues: user } = await sheet.getUser();

  if (user.id !== userId) throw {
    status: 401,
    message: "You don't have access to this content"
  }

  return sheet;

}

const create = async (req, res) => {

  const { user: { id }, body } = req;

  try {

    await CreateSheetRequestValidator.validate(body);
    const response = await Sheet.create({ user_id: id, ...body })
    res.status(200).json(response);

  } catch (error) {
    res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

const list = async (req, res) => {

  const { user } = req;

  try {

    const userResult = await User.findOne({ where: user.id });
    return res.status(200).json(await userResult.getSheets())

  } catch (error) {
    res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

const getById = async (req, res) => {

  const { id } = req.params;
  const { user: { id: userId } } = req;

  try {

    const sheet = await makeSheet(id, userId);
    return res.status(200).json(await sheet.toJSON());

  } catch (error) {
    res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

const update = async (req, res) => {
  const { id } = req.params;
  const { user: { id: userId }, body } = req;

  try {

    await CreateSheetRequestValidator.validate(body);
    const sheet = await makeSheet(id, userId);
    await sheet.update(body);
    res.status(200).json({ message: "Sheet updated", sheet: await sheet.toJSON() });


  } catch (error) {
    res.status(error.status || 500).json({ messsage: error.message || error });
  }
}


const remove = async (req, res) => {
  const { id } = req.params;
  const { user: { id: userId } } = req;

  try {

    const sheet = await makeSheet(id, userId);
    sheet.destroy();
    return res.status(200).json('Sheet deleted');

  } catch (error) {
    res.status(error.status || 500).json({ messsage: error.message || error });
  }

}

module.exports = {
  create,
  list,
  getById,
  update,
  remove
}