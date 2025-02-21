const express = require("express");
const {
  addPlaceOrder,
  getPlaceOrder,
  stripPlaceController,
} = require("../controllers/placeOrderController");
const router = express.Router();

const { wrapAsync } = require("../utills/wrapAsync");

router.post("/placeorder", wrapAsync(addPlaceOrder));

router.get("/placeorder", wrapAsync(getPlaceOrder));

router.post("/placeorder/stripe", wrapAsync(stripPlaceController));

module.exports = router;
