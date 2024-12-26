const {model} = require("mongoose");
const productSchema = require("../Schemas/ProductSchema.jsx");

const ProductModel = new model("Product" , productSchema);

module.exports= ProductModel;