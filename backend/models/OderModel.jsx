const {model} = require("mongoose");
const OrderShema = require("../Schemas/OrdersSchema.jsx")

const OrderModel =  new model("Order" , OrderShema);

module.exports= OrderModel;
