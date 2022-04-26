const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  try {

    if (!authorization) throw {
      status: 400,
      messsage: "authorization header is required"
    }

    const { JWT_SECRET } = process.env;
    const token = authorization.replace("Bearer ", "");
    console.log(token);
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) throw {
        status: 500,
        messsage: "Failed to authenticate token."
      }
      req.user = decoded;
    })

  } catch (error) {
    return res.status(error.status || 500).json({ messsage: error.messsage || error });
  }
  next();
}

module.exports = checkLogin;