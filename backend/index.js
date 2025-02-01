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
const sizeModel = require("./models/SizeModel.jsx")
const upload = require("./middleware/multer.js")
const AdminAuthentication = require("./middleware/AdminAuthentication.js");
// const cors = require("cors");
// const mongoose = require("mongoose");

const bcrypt = require('bcrypt');

  

// const passport = require("passport");
const app = express();
const PORT= process.env.PORT ||   4000 ;
const uri = process.env.MONGO_URL;

const jwt = require("jsonwebtoken");


 
  
 const path = require("path");
const productSchema = require("./Schemas/ProductSchema.jsx");
const { nextTick, title } = require("process");
const passport = require("passport");
const { PassThrough } = require("stream");
const OrderModel = require("./models/OderModel.jsx");
const CartModel = require("./models/CartModel.jsx");
const { default: Cart } = require("../frontend/src/LandingPage/Cart.jsx");


 
   



// app.use(cors());
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
app.post("/addProduct" ,upload.fields([{name:"imageF",maxCount:1},{name:"imageS",maxCount:1}, {name:"imageT",maxCount:1} , {name:"imageFourth",maxCount:1}]) , async (req, res) => {
  //  app.post("/addProduct", async(req,res)=>{
  // console.log(req.body);
  try {
    const {title ,
      category ,
      description,
      price ,
      // subCategory,
      // sizes , 
      bestSeller,
      // qty
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
      // subCategory,
      // sizes :JSON.parse(sizes), 
      // sizes: typeof sizes === "String" ? JSON.parse(sizes) : sizes, 

      bestSeller : bestSeller === "true"? true:false,
      image : imageurl,
      // qty: Number(qty),
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
  }) ;

   app.get("/getWomCategory" , async(req,res)=>{
    try{
    // const {category} = req.params ;
    // console.log(category)
    
     const findWomCategory = await ProductModel.find({category:"Women" });
       
     res.json({success:true , message:findWomCategory})
    }
    catch(err){
      res.json({success:false , message:err.message})
    }
   })

  app.post("/sizeqty" , async(req,res)=>{
    try{
      const {size } = req.body;
      const newSize =  new sizeModel({size});
       const saveSize = await newSize.save();
      res.json({success:true,message:saveSize})
    }
    catch(err){
      res.json({success:false,message:err.message})
    }
  })
   
   app.get("/sizeqty" , async(req,res)=>{
    try{
    //  const {id} = req.params;
     const getSizes = await sizeModel.find({});
     res.json({success:true, message:getSizes})
    } 
    catch(err){
      res.json({success:false, message:err.message})
    }

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
      const {id} = req.params ;
      // console.log(id);
      const detailProd = await ProductModel.findById(id);
      res.json({success:true ,message:detailProd })
    }
    catch(err){
      res.json({success:false,message:err.message})
    }
  })


    // Placing order by Cash on delivery
    app.post("/placeorder/COD" , async(req,res)=>{
      try{
        const {UserId , itmes , price , address} = req.body;
        const newOder = new OrderModel({
          UserId ,
           itmes ,
            price ,
             address,
             paymentMode:"COD",
             payment:false,
             date:Date.now()
        })
       const order= await newOder.save();
        res.json({status:true , message:order})
      }
      catch(err){
        res.json({success:false,message:err})
      }

    })

    // PLaceing order by razorpay 
     app.post("/placeorder/razorpay" , async(req,res)=>{

     })

    //  All order for admin panel 



    // Shopping data for frontend


    

  // Product's added in cart
  app.post("/cart/:id" , async(req,res)=>{

    try{
       const {image , title, price , qty , sizes } = req.body;
      const newProd = new CartModel({
      title ,
      price ,
      qty,
      image ,
      sizes, 
     
    })
    await newProd.save();
    res.json({success:true , message:newProd})
    }
    catch(err){
      res.json({success:false , message:err})
    }
  })

  // Product's viewing in cart
  app.get("/cart" , async(req,res)=>{
    try{
      
    
    const cartProduct = await CartModel.find({});
    res.json({success:true, message:cartProduct})
    }
    catch(err){
      res.json({success:false, message:err.message});
    }
  }) ;

  app.delete("/cart/delete/:id" ,async(req,res)=>{
    try{
    const {id} = req.params;
    // console.log(id)
    // const {title} = req.body;
    const deleteProd = await CartModel.findByIdAndDelete(id);
    if (!deleteProd) {
      return res.status(404).json({ success: false, message: "Product not found" });
  }
    res.json({success:true, message:deleteProd})
    }
    catch(err){
      res.json({success:false, message:err.message})
    }

  })

  app.get("/cart/count" , async(req,res)=>{
    try{
      const countdata = await CartModel.countDocuments();
      res.json({success:true , message:countdata})
    }
    catch(err){
      res.json({success:false , message:err.message})
    }
  })


  //  Cart total price

  app.get("/cart/tp" , async(req,res)=>{
     try{
    const data = await CartModel.find({});
    const totalPrice = data.reduce( (val , prod)=> val+prod.price*prod.qty ,0)
    res.json({success:true , message:totalPrice})
     }
     catch(err){
      res.json({success:false, message:err.message})
     }
    // console.log(totalPrice)
  })

  // Remove single cart

  



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

      app.post("/adminLogin" , async(req,res)=>{
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
  








