const User = require("../models/user");
const jwt = require("jsonwebtoken");

const homeAuth = async (req, res, next) => {
  const user = await User.findOne({ token: req.cookies.token });
  if (user) {
    const verify = await jwt.verify(user.token, process.env.JWT_PRIVATE_KEY);

    if (verify._id === JSON.stringify(user._id)) {
      req.user = user;
      next();
    }
  } else {
    req.user = undefined;
    next();
  }
};

const midAuth = async (req, res, next) => {
  const user = await User.findOne({ token: req.cookies.token });

  if (!user) {
    console.log("User Not Found");
    return res.redirect("/");
  }
  const verify = await jwt.verify(user.token, process.env.JWT_PRIVATE_KEY);
  if (verify._id === JSON.stringify(user._id)) {
    req.user = user;
    return next();
  }
};

module.exports = { homeAuth, midAuth };
