require("dotenv").config();
// const cloudinary = require("./utills/cloudinaryConfig.js");
// const storage = require("./utills/cloudinaryConfig.js");
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require("express");

// const connectCloudinary = require("./utills/cloudinaryConfig");
const cloudinary = require('cloudinary');
const cors = require("cors");
const mongoose = require("mongoose");

const UserModel = require("./models/UserModel.jsx");
// const multer= require("multer");

const ProductModel = require("./models/ProductModel.jsx");

const upload = require("./middleware/multer.js")
const AdminAuthentication = require("./middleware/AdminAuthentication.js");
// const cors = require("cors");
// const mongoose = require("mongoose");



  

// const passport = require("passport");
const app = express();
const PORT= process.env.PORT ||   4000 ;
const uri = process.env.MONGO_URL;

const jwt = require("jsonwebtoken");


 
  
 const path = require("path");
const productSchema = require("./Schemas/ProductSchema.jsx");
const { nextTick } = require("process");
const passport = require("passport");
const { PassThrough } = require("stream");



 
   



app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's URL
    credentials: true,              // Allow credentials (cookies, etc.)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(cookieParser());


const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Upload files to 'uploads/' directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to file name
//   },
// });
// const storage = multer({ storage });






  app.get("/" , async(req,res)=>{
    res.send("Root path");
    
  }) ;



  // Route to add a product
app.post("/addProduct" ,AdminAuthentication,upload.fields([{name:"imageF",maxCount:1},{name:"imageS",maxCount:1}, {name:"imageT",maxCount:1} , {name:"imageFourth",maxCount:1}]) , async (req, res) => {
  //  app.post("/addProduct", async(req,res)=>{
  console.log(req.body);
  try {
    const {title ,
      category ,
      description,
      price ,
      subCategory,
      sizes , 
      bestSeller,
      qty
    }  = req.body;

    const imageF = req.files.imageF && req.files.imageF[0]
    const imageS =  req.files.imageS && req.files.imageS[0]
    const imageT = req.files.imageT && req.files.imageT[0]
    const imageFourth = req.files.imageFourth && req.files.imageFourth[0]
     
     const images = [imageF , imageS , imageT , imageFourth].filter((item)=>item !== undefined)
     let imageurl = await Promise.all( 
      images.map( async (item) =>{
        let result1 = await cloudinary.uploader.upload(item.path ,{resource_type:"image"});
        return result1.secure_url
      })
     )
      // const ProductData = {
      //   title ,
      // category ,
      // description,
      // price :Number(price),
      // subCategory,
      // sizes :JSON.parse(sizes), 
      // bestSeller : bestSeller === "true"? true:false,
      // image : imageurl,
      // qty: Number(qty),
      // date : Date.now()
      // }
        // console.log(ProductData);
        const newPrdouct = new ProductModel({
          title ,
      category ,
      description,
      price :Number(price),
      subCategory,
      sizes :JSON.parse(sizes), 
      bestSeller : bestSeller === "true"? true:false,
      image : imageurl,
      qty: Number(qty),
      date : Date.now()
        }) ;
        await newPrdouct.save();
    res.json({success:true , message: "Product Added"});

  }
  catch(err){
     console.log(err)
     res.json({success:false, message:err.message})
  }
})

// list product
  app.get("/listProduct" , async(req,res)=>{
     try{
      const products = await ProductModel.find({});
      res.json({success:true , message:products})
     }
     catch(err){
      res.json({success:false , message:err.message})
     }
  }) ;

  app.get("/bestSeller" , async(req,res)=>{
    try
    {
      const product = await ProductModel.find({bestSeller:true})
      res.json({success:true, message:product})
      }

      catch(err){
        res.json({success:false , message:err.message})
      }
    // console.log(besteller)
  })



  // Remove Product

  app.delete("/deleteProduct" ,AdminAuthentication, async(req,res)=>{
    try{
      const removeProd = await ProductModel.findByIdAndDelete(req.body.id)
      res.json({success:true ,message:removeProd })
    }
    catch(err){
      res.json({success:false , message:err.message})
    }
  })

  // Particular Product Detail

  app.get("/productDetail/:id" , async(req,res)=>{
    try{
      const {id} = req.body ;
      const detailProd = await ProductModel.findById(id);
      res.json({success:true ,message:detailProd })
    }
    catch(err){
      res.json({success:false,message:err.message})
    }
  })





// removing product
  
    // Authentication
    app.post("/signupUser", async (req, res) => {
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

    app.post("/userLogin", async (req, res, next) => {
      try {
        const { email, password } = req.body;
        if(!email || !password ){
          return res.json({message:'All fields are required'})
        }
        const user = await UserModel.findOne({ email });
        if(!user){
          return res.json({message:'Incorrect password or email' }) 
        }
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
          return res.json({message:'Incorrect password or email' }) 
        }
         const token = createSecretToken(user._id);
         res.cookie("token", token, {
           withCredentials: true,
           httpOnly: false,
         });
         res.status(201).json({ message: "User logged in successfully", success: true });
         next()
      } catch (error) {
        console.error(error);
      }
    });

    app.post("/userVerification" , async(req,res)=>{
      const token = req.cookies.token
      if (!token) {
        return res.json({ status: false })
      }
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
         return res.json({ status: false })
        } else {
          const user = await UserModel.findById(data.id)
          if (user) return res.json({ status: true, user: user.username })
          else return res.json({ status: false })
        }
      })
    
    });


       
      // Admin Login For Admin Folder

      app.post("/adminLogin",AdminAuthentication , async(req,res)=>{
        try{
           const {email ,password} = req.body;
           if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const result = jwt.sign(email+password , process.env.JWT_SECRET)
            res.json({success:true, result})
          } 

          // if(!result){
          //   res.json({success:false, message:"Incorrect Details. Please Login Again"})
          // }
          else{
            res.json({success:false,message:"Invalid credntial"})
          }
        }
        catch(err){
          res.json({success:false ,message: err.message})
        }
      })

    // app.get("/logoutSaler" , async(req,res)=>{
    //   res.send("logout                 ...............")
    // })
  
    



  app.listen(PORT, () => {
    console.log(`Server running on http://169.254.137.29:4000`);
    // mongoose.connect(process.env.MONGO_URL);
    mongoose.connect(uri)
    console.log("Database is successfully connected");
  });
  








