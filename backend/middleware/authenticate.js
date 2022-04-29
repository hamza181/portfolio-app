const jwt = require("jsonwebtoken");

const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }

    req.user = rootUser;
    req.token = token;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("No token provided");
    console.log(error);
  }
};

module.exports = Authenticate;
