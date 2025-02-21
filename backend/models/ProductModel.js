const { model } = require("mongoose");
const productSchema = require("../Schemas/ProductSchema");

const ProductModel = model("ProductModel", productSchema);

module.exports = ProductModel;
