const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {

    const hash = await bcrypt.hash(password, 10);
    await User.create({ username, password: hash });
    res.status(201).json({ message: "User registered" });

  } catch (error) {
    console.log(`An error ocurred: ${error}`);
    res.status(500).json({ message: `An error ocurred: ${error}` });
  }

}

const loginUser = async (req, res) => {

  const { username, password } = req.body;

  try {

    const user = await User.findOne({ where: { username } });
    if (await bcrypt.compare(password, user.password)) {
      return res.status(200).json({ message: "You have successfully logged in" })
    } else {
      throw {
        status: 400,
        message: "User or Password invalid"
      }
    }


  } catch (error) {
    console.log(`An error ocurred: ${error.message || error}`);
    res.status(error.status || 500).json({ message: `An error ocurred: ${error.message || error}` });
  }

}

module.exports = {
  registerUser,
  loginUser
}