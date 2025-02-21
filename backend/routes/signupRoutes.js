const express = require("express");
const {
  userLoginController,
  userVerifyController,
  signUpController,
} = require("../controllers/signUpController");
const router = express.Router();

const { wrapAsync } = require("../utills/wrapAsync");

router.post("/signupUser", wrapAsync(signUpController));

router.post("/userLogin", wrapAsync(userLoginController));

router.post("/userVerification", wrapAsync(userVerifyController));

module.exports = router;
