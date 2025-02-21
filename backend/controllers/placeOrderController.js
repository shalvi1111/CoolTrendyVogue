const OrderModel = require("../models/OderModel");
const CartModel = require("../models/CartModel");
// const Stripe = require("stripe");
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports.addPlaceOrder = async (req, res) => {
  const { userId, items, paymentMode, price, address } = req.body;

  // Validate required fields
  if (!userId || !items || !paymentMode || !price || !address) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  // Create a new order
  const newOrder = new OrderModel({
    userId,
    items,
    paymentMode: "COD",
    payment: true,
    price,
    address,
    date: Date.now(), // Set current timestamp
  });

  const order = await newOrder.save();

  //  const {id} = req.body;
  const cart = await CartModel.findById(userId); // Find by correct userId
  // console.log(cart ,"47893");
  if (cart) {
    const deletedCart = await CartModel.deleteMany({}); // Delete all cart items
    // console.log(`Deleted ${deletedCart.deletedCount} cart items for UserId: ${userId}`);
  } else {
    console.log("No cart found for UserId:", userId);
  }

  // Respond with success message
  res.json({
    success: true,
    message: "Order placed successfully",
    order,
    cart,
  });
};

module.exports.getPlaceOrder = async (req, res) => {
  const order = await OrderModel.find({});
  res.json({ success: true, message: order });
};

module.exports.stripPlaceController = async (req, res) => {
  const { userId, items, paymentMode, price, address } = req.body;
  const { origin } = req.headers;
  const orderData = {
    userId,
    items,
    paymentMode: "Stripe",
    payment: false,
    price,
    address,
    date: Date.now(), // Set current timestamp
  };

  const newOrder = new OrderModel(orderData);
  const orderPlaced = await newOrder.save();
  //   Stripe  Session
  const line_items = items.map((item) => ({
    price_data: {
      currency: "ruppee",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));
  // const session = await stripe.checkout.sessions.create({
  //   mode: "payment",
  //   success_url: `${origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${origin}/order-cancelled`,
  // });

  res.json({ success: true, sessionId: session.id });
};
