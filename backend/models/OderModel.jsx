const {model} = require("mongoose");
const OrderShema = require("../Schemas/OrdersSchema");

const OrderModel = new model("Order" , OrderShema);

module.exports= OrderModel;
