const express = require("express");
const {
  getWomCategoryController,
  getMenCategoryController,
  getKidCategoryController,
} = require("../controllers/categoryController");
const router = express.Router();
const { wrapAsync } = require("../utills/wrapAsync");

router.get("/getWomCategory", wrapAsync(getWomCategoryController));

router.get("/getMenCategory", wrapAsync(getMenCategoryController));

router.get("/getKidCategory", wrapAsync(getKidCategoryController));

module.exports = router;
