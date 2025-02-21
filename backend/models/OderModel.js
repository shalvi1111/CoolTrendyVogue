const { model } = require("mongoose");
const OrderShema = require("../Schemas/OrdersSchema.js");

const OrderModel = model("OrderModel", OrderShema);

module.exports = OrderModel;
