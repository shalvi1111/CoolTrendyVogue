const ProductModel = require("../../models/ProductModel");

module.exports.editProductController = async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  // console.log(req.body ,"tgrfeds");
  if (!product) {
    // console.log("error, Product doesn't exist");
    return res.redirect("/listProduct");
  }
  // Object.assign(product,req.body);
  // await product.save();

  res.json({ success: true, message: product });
};

module.exports.productByIdController = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const detailProd = await ProductModel.findById(id);
  res.json({ success: true, message: detailProd });
};

module.exports.productDeleteController = async (req, res) => {
  const { id } = req.params;

  const removeProd = await ProductModel.findByIdAndDelete(id);
  // console.log(removeProd);
  res.json({ success: true, message: removeProd });
};
