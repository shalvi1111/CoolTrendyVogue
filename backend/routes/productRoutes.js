const express = require("express");
const router = express.Router();

const {
  productListController,
  bestSellerController,
} = require("../controllers/productControllers/productController");

const {
  addProductController,
} = require("../controllers/productControllers/addProductController");

const {
  editProductController,
  productByIdController,
  productDeleteController,
} = require("../controllers/productControllers/deleteEditController");

const { wrapAsync } = require("../utills/wrapAsync");

router.get("/listProduct", wrapAsync(productListController));

router.get("/bestSeller", wrapAsync(bestSellerController));

router.post("/addProduct", wrapAsync(addProductController));

router.get("/edit/:id", wrapAsync(editProductController));

router.get("/productDetail/:id", wrapAsync(productByIdController));

router.delete("/productDetail/:id", wrapAsync(productDeleteController));

module.exports = router;
