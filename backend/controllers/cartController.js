const CartModel = require("../models/CartModel");

module.exports.addCartController = async (req, res) => {
  const { image, title, price } = req.body;
  const newProd = new CartModel({
    title,
    price,
    // qty,
    image,
    // sizes,
  });
  await newProd.save();
  res.json({ success: true, message: newProd });
};

module.exports.getCartController = async (req, res) => {
  const cartProduct = await CartModel.find({});
  res.json({ success: true, message: cartProduct });
};

module.exports.cartCountController = async (req, res) => {
  const countdata = await CartModel.countDocuments();
  res.json({ success: true, message: countdata });
};

module.exports.cartTpController = async (req, res) => {
  const data = await CartModel.find({});
  const totalPrice = data.reduce((val, prod) => {
    return (
      val + prod.sizes.reduce((sum, size) => sum + size.qty * prod.price, 0)
    );
  }, 0);

  res.json({ success: true, message: totalPrice });
};

module.exports.deleteCartController = async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  // const {title} = req.body;
  const deleteProd = await CartModel.findByIdAndDelete(id);
  if (!deleteProd) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res.json({ success: true, message: deleteProd });
};
