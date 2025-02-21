const express = require("express");
const {
  addCartController,
  getCartController,
  cartCountController,
  deleteCartController,
  cartTpController,
} = require("../controllers/cartController");
const router = express.Router();
const { wrapAsync } = require("../utills/wrapAsync");

router.post("/cart", wrapAsync(addCartController));

router.get("/cart", wrapAsync(getCartController));

router.get("/cart/count", wrapAsync(cartCountController));

router.get("/cart/tp", wrapAsync(cartTpController));

router.delete("/cart/delete/:id", wrapAsync(deleteCartController));

module.exports = router;
