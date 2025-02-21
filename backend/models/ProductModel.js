const { model } = require("mongoose");
const productSchema = require("../Schemas/ProductSchema");

const ProductModel = model("Product", productSchema);

module.exports = ProductModel;
