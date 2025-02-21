const { model } = require("mongoose");
const CartSchema = require("../Schemas/CartSchema.js");

const CartModel = model("cart", CartSchema);

module.exports = CartModel;
