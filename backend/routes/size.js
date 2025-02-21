const express = require("express");
const {
  sizeQtyController,
  sizeGetByIdController,
} = require("../controllers/sizeController");
const router = express.Router();

const { wrapAsync } = require("../utills/wrapAsync");

router.post("/sizeqty", wrapAsync(sizeQtyController));

router.get("/sizeqty/:id", wrapAsync(sizeGetByIdController));

module.exports = router;
