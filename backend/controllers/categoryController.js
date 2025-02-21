const ProductModel = require("../models/ProductModel");

module.exports.getWomCategoryController = async (req, res) => {
  const findWomCategory = await ProductModel.find({ category: "Women" });

  res.json({ success: true, message: findWomCategory });
};

module.exports.getMenCategoryController = async (req, res) => {
  const menCategory = await ProductModel.find({ category: "Men" });
  res.json({ success: true, message: menCategory });
};

module.exports.getKidCategoryController = async (req, res) => {
  const prod = await ProductModel.find({ category: "Kid" });
  res.json({ success: true, message: prod });
};
