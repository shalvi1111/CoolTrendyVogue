const ProductModel = require("../../models/ProductModel");

module.exports.productListController = async (req, res) => {
  const products = await ProductModel.find({});
  res.json({ success: true, message: products });
};

module.exports.bestSellerController = async (req, res) => {
  const product = await ProductModel.find({ bestSeller: true });
  res.json({ success: true, message: product });
};
