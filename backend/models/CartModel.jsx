const {model} = require("mongoose");
const CartSchema = require("../Schemas/CartSchema.jsx");

const CartModel = new model("cart", CartSchema );

module.exports= CartModel;