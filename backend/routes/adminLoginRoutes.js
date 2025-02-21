const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { wrapAsync } = require("../utills/wrapAsync");
router.post(
  "/adminLogin",
  wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credntial" });
    }
  })
);

module.exports = router;
