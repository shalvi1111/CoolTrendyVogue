require("dotenv").config();
const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
// const session = require('express-session');
const UserModel = require("./models/UserModel.jsx");
const multer = require("multer");

const ProductModel = require("./models/ProductModel.jsx");
// const passport = require("passport");
const app = express();
const PORT= process.env.PORT ||   4000 ;
const uri = process.env.MONGO_URL;

const jwt = require("jsonwebtoken");


 

 const path = require("path");

 app.use("/uploads", express.static("uploads"));

 
   



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+"__"+ file.originalname);
  }
})

const upload = multer({ storage ,
  limits: { fileSize: 1000 * 1024 * 1024 }, 
})


  app.get("/" , async(req,res)=>{
    res.send("Root path");
    
  }) ;

  // app.post("/addProduct",upload.single("image") , async(req,res)=>{
      
  //   const newProduct = new ProductModel({
  //     description: req.body.description,
  //     title: req.body.title ,
  //     price : req.body.price,
  //     qty : req.body.qty,
  //     image: req.file ? `/uploads/${req.file.filename}` : null
  //     // image:req.file.originalname
  //   //  image: req.file.originalname
      
  //   }) ;
      
    
  //   let prod=  await newProduct.save();
  //   console.log(prod);
   

    
  // });

  // Route to add a product
app.post("/addProduct", upload.single("image"), async (req, res) => {
  try {
    const newProduct = new ProductModel({
      description: req.body.description,
      title: req.body.title,
      price: req.body.price,
      qty: req.body.qty,
      // image: req.file? req.file.filename : null
      image: req.file ? `/uploads/${req.file.filename}` : null, 
    });

    const prod = await newProduct.save();
    console.log(prod);
    res.status(201).json(prod);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
});


   app.get("/showProduct" , async(req,res)=>{
   
      const product = await ProductModel.find({});
      // const product =  ProductModel.find((p) => p.id.toString() === id);
     let prod = res.json(product);

      // console.log(prod,"jfdnnjn")
    //  res.redirect("/");
   });

  //  app.get("/showProduct/:id" async(req,res)=>{
  //   let {id} = req.params ;
  //   const product = await ProductModel.find( (p)=>{p.id.toString() ===id});

  //  })

  //  app.get("/showDetails" , async(req,res)=>{
  //   // res.send("Showing the details of product");
  //   // let {id} = req.params ;
  //   // const product = await ProductModel.findById({id});
  //   // res.json(product);
  //   console.log("koko");
  //  })image: req.file ? req.file.filename : null,


    // app.post("/signupSaler" , async (req, res, next) => {
    //   try {
    //     const { email, password, username, createdAt } = req.body;
    //     const existingUser = await UserModel.findOne({ email });
    //     if (existingUser) {
    //       return res.json({ message: "User already exists" });
    //     }
    //     const user = await UserModel.create({ email, password, username, createdAt });
    //     const token = createSecretToken(user._id);
    //     res.cookie("token", token, {
    //       withCredentials: true,
    //       httpOnly: false,
    //     });
    //     res
    //       .status(201)
    //       .json({ message: "User signed in successfully", success: true, user });
    //     next();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })
    
    app.post("/signupSaler", async (req, res) => {
      try {
        const { email, password, username, createdAt } = req.body;
    
        if (!email || !password || !username) {
          return res.status(400).json({ message: "All fields are required", success: false });
        }
    
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ message: "User already exists", success: false });
        }
    
        const user = await UserModel.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
    
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });
    
        res.status(201).json({ message: "User signed up successfully", success: true, user });
      } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Server error. Please try again later.", success: false });
      }
    });
  
    



  app.listen(PORT, () => {
    console.log(`Server running on http://169.254.137.29:4000`);
    // mongoose.connect(process.env.MONGO_URL);
    mongoose.connect(uri)
    console.log("Database is successfully connected");
  });
  

