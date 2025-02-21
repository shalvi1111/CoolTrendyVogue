const { model } = require("mongoose");
const OrderShema = require("../Schemas/OrdersSchema.js");

const OrderModel = model("Order", OrderShema);

module.exports = OrderModel;
