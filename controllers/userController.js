require('dotenv').config()
const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');
const SignUpRequestValidator = require('../validations/SignUpRequest');
const SignInRequestValidator = require('../validations/SignInRequest');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {

    await SignUpRequestValidator.validate(req.body);
    const hash = await bcrypt.hash(password, 10);
    await User.create({ username, password: hash });
    res.status(201).json({ message: "User registered" });

  } catch (error) {
    console.log(`An error ocurred: ${error}`);
    res.status(error.status || 500).json({ message: `An error ocurred: ${error.message || error}` });
  }

}

const loginUser = async (req, res) => {

  const { username, password } = req.body;

  try {

    await SignInRequestValidator.validate(req.body);
    const user = await User.findOne({ where: { username } });
    const { JWT_SECRET } = process.env;
    if (!user) throw {
      status: 400,
      message: "User or Password invalid"
    }
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        username: user.username
      }
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 8000 });
      return res.status(200).json({
        message: "You have successfully logged in",
        token
      })
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