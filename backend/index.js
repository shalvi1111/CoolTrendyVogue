require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const uri = process.env.MONGO_URL;
const mongoose = require("mongoose");

const productRoutes = require("./routes/productRoutes.js");
const adminLoginRoutes = require("./routes/adminLoginRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const categoryRoutes = require("./routes/getWomCategory.js");
const placeorderRoutes = require("./routes/placeOrderRoutes.js");
const signUpRoutes = require("./routes/signupRoutes.js");
const sizeRoutes = require("./routes/size.js");

async function connectMongoDb() {
  try {
    await mongoose.connect(uri);
    console.log("Database Connection Done");
  } catch (error) {
    console.error(error.message);
  }
}
connectMongoDb();

app.use(
  cors({
    //here add your https deploy link
    origin: "http://localhost:3000" || "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productRoutes);
app.use("/", adminLoginRoutes);
app.use("/", cartRoutes);
app.use("/", categoryRoutes);
app.use("/", placeorderRoutes);
app.use("/", signUpRoutes);
app.use("/", sizeRoutes);

app.use((err, req, res) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;
  res.status(statusCode).send(message);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
