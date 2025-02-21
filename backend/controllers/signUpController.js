const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

module.exports.signUpController = async (req, res) => {
  const { email, password, username, createdAt } = req.body;

  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ message: "All fields are required", success: false });
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res
      .status(409)
      .json({ message: "User already exists", success: false });
  }

  const user = await UserModel.create({
    email,
    password,
    username,
    createdAt,
  });
  const token = createSecretToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res
    .status(201)
    .json({ message: "User signed up successfully", success: true, user });
};

module.exports.userLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "All fields are required" });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ message: "Incorrect password or email" });
  }
  const auth = await bcrypt.compare(password, user.password);
  if (!auth) {
    return res.json({ message: "Incorrect password or email" });
  }
  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: true,
  });
  res
    .status(201)
    .json({ message: "User logged in successfully", success: true });
  next();
};

module.exports.userVerifyController = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};
