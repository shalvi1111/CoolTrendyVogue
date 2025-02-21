const { model } = require("mongoose");
const CartSchema = require("../Schemas/CartSchema.js");

const CartModel = model("CartModel", CartSchema);

module.exports = CartModel;
