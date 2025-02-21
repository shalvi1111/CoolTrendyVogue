const ProductModel = require("../models/ProductModel");
const CartModel = require("../models/CartModel");

module.exports.sizeQtyController = async (req, res) => {
  const { size, qty, productId } = req.body;

  const product = await ProductModel.findById(productId);
  const existingSize = product.sizes.find((s) => s.size === size);
  if (existingSize) {
    existingSize.qty += qty;
  } else {
    product.sizes.push({ size, qty });
  }
  const saveSize = await product.save();

  let cart = await CartModel.findOne({
    title: product.title,
    image: product.image,
    "sizes.size": size,
  });

  if (!cart) {
    //
    cart = new CartModel({
      image: product.image,
      title: product.title,
      price: product.price,
      sizes: [{ size, qty }],
    });
  } else {
    // update size
    const cartSize = cart.sizes.find((s) => s.size === size);
    if (cartSize) {
      cartSize.qty += qty;
    } else {
      cart.sizes.push({ size, qty });
    }
  }
  const cart1 = await cart.save();

  res.json({ success: true, message: saveSize, cart1 });
};

module.exports.sizeGetByIdController = async (req, res) => {
  const { id } = req.params;
  //  console.log(productId);
  //  const objectId = new mongoose.Types.ObjectId(productId);
  const getSizes = await CartModel.findById(id).select("sizes");

  res.json({ success: true, message: getSizes });
  //  console.log(getSizes);
};
