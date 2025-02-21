const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  image: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  sizes: [{ size: String, qty: Number }],
  price: {
    type: Number,
    required: true,
  },
});

module.exports = CartSchema;
