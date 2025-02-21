const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderShema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
  orderTrack: {
    type: String,
    required: true,
    default: "Order is placed",
  },
  price: {
    type: Number,
    required: true,
  },
  payment: {
    type: Boolean,
    required: true,
    default: false,
  },
  address: {
    type: Object,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

module.exports = OrderShema;
