// const {model} = require("mongoose");
const { default: mongoose } = require("mongoose");
const userSchema = require("../Schemas/UserSchema.js");

const UserModel =
  mongoose.model.user || mongoose.model("UserModel", userSchema);

module.exports = UserModel;
