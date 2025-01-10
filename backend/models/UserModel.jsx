// const {model} = require("mongoose");
const { default: mongoose } = require("mongoose");
const userSchema = require("../Schemas/UserSchema.jsx");

const UserModel =  mongoose.model.user || mongoose.model("user" , userSchema)

module.exports = UserModel;