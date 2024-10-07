const mongoose = require("mongoose");
const initData = require("./data.js");
const Product = require("../models/clothes.js");

main()
.then( () => {
    console.log("DB is connected" );
})
.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/ClothesProduct');
} 

  const initDB = async () =>{
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
    console.log("data was initialized");
  }
   initDB();