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

const OrderModel = require("./models/OderModel.jsx");
const CartModel = require("./models/CartModel.jsx");



  // const {origin} = window.location;
   const stripe = require("stripe")(process.env.STRIPE_SECRET);



// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:3001"], //  React app URL
    credentials: true,              //  credentials 
  })
);

// CORS Configuration
// app.use(cors({
//   // origin: ["local host link", "ur render link"],
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true // Allow cookies and authentication headers
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};








  app.get("/" , async(req,res)=>{
    res.send("Backend uploaded");
    // res.render("/listProduct");
    
  }) ;


  
  // Route to add a product
app.post("/addProduct" ,upload.fields([{name:"imageF",maxCount:1},{name:"imageS",maxCount:1}, {name:"imageT",maxCount:1} , {name:"imageFourth",maxCount:1}]) , async (req, res) => {

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
  
    
     
        const newPrdouct = new ProductModel({
          title ,
      category ,
      description,
      price :Number(price),
      

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

   app.put("/edit/:id" , async(req,res)=>{
    try{
      const {id}= req.params;
        const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
        // console.log(req.body ,"tgrfeds");
        if(!product){
          // console.log("error, Product doesn't exist");
         return res.redirect("/listProduct");
        }
          

      res.json({success:true,message: product});
    }
    catch(err){
      res.json({success:false,message:err.message});
    }
   });

  

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
   }) ;

   app.get("/getMenCategory" , async(req,res)=>{
    try{
      const menCategory = await ProductModel.find({category:"Men"}) ;
      res.json({success:true , message:menCategory})
    }
    catch(err){
      res.json({success:false , message:err.message})
    }
   }) ;

   app.get("/getKidCategory" , async(req,res)=>{
    try{
      const prod = await ProductModel.find({category :"Kid"});
      res.json({success:true , message:prod});
    }
    catch(err){
      res.json({success:false , message:err.message});
    }
   })

  app.post("/sizeqty" , async(req,res)=>{
    try{
      // const productId= req.params.id;
      // console.log(productId);
      const {size ,qty , productId  } = req.body;
      // if(!productId || !size || !qty){
      //   res.json({success:false , message:" fields are required "});
      // }
      const product =  await ProductModel.findById( productId);
      const existingSize = product.sizes.find( (s)=> s.size === size);
      if(existingSize){
        existingSize.qty += qty;
      }
      else{
        product.sizes.push({size ,qty});

      }
       const saveSize = await product.save();
       
    let cart = await CartModel.findOne({ title: product.title, image: product.image, "sizes.size": size   });
    
    if (!cart) {
      // 
      cart = new CartModel({
        image: product.image,
        title: product.title,
        price: product.price,
        sizes: [{ size, qty }]
      });
    } else {
      // update size
      const cartSize = cart.sizes.find((s) => s.size === size);
      if (cartSize) {
        cartSize.qty += qty;
      } else {
        cart.sizes.push({ size, qty });
      }
    }
    const cart1 = await cart.save();

      res.json({success:true,message:saveSize ,cart1 })
    }
    catch(err){
      res.json({success:false,message:err.message})
    }
  });
   
   app.get("/sizeqty/:id" , async(req,res)=>{
    try{
     const {id} = req.params;
    //  console.log(productId);
   
     const getSizes = await CartModel.findById(id).select("sizes");
     
     res.json({success:true, message:getSizes});
    //  console.log(getSizes);
    } 
    catch(err){
      res.json({success:false, message:err.message})
    }

   })


  // Remove Product

  app.delete("/productDetail/:id" , async(req,res)=>{
    const {id} = req.params ;
    try{
      const removeProd = await ProductModel.findByIdAndDelete(id);
      // console.log(removeProd);
      res.json({success:true ,message:removeProd })
    }
    catch(err){
      res.json({success:false , message:err.message})
    }
  });

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



  // Product's added in cart
  app.post("/cart" , async(req,res)=>{

    try{
       const {image , title, price  } = req.body;
      const newProd = new CartModel({
      title ,
      price ,
      // qty,
      image ,
      // sizes, 
     
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
    const totalPrice = data.reduce( (val , prod)=> 
      {return val + prod.sizes.reduce((sum, size) => sum + size.qty * prod.price, 0) } ,0);

    res.json({success:true , message:totalPrice})
     }
     catch(err){
      res.json({success:false, message:err.message})
     }
    // console.log(totalPrice)
  });

  // Placing order by Cash on delivery
  app.post("/codMode" , async(req,res)=>{
    try {
      const { userId, items, paymentMode, price, address } = req.body;
  
      //  required fields
      if (!userId || !items || !paymentMode || !price || !address) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
      }
  
      // Create a new order
      const newOrder = new OrderModel({
        userId,
        items,
        paymentMode,
        payment:true,
        price,
        address,
        date: Date.now(), // Set current timestamp
      });
  
      const order = await newOrder.save();
  
      //  const {id} = req.body;
      const cart = await CartModel.findById( userId ); // Find by correct userId
      // console.log(cart ,"47893");
if (cart) {
    const deletedCart = await CartModel.deleteMany( {} ); // Delete cart
    // console.log(`Deleted ${deletedCart.deletedCount} cart items for UserId: ${userId}`);
} else {
    console.log("No cart found for UserId:", userId);
}

      //  success 
      res.json({
        success: true,
        message: "Order placed successfully",
        order, cart
      });
    } catch (err) {
      console.error("Order Placement Error:", err);
      res.status(500).json({ success: false, error: "Server error while placing order" });
    }
  });

  app.get("/placeorder" , async(req,res)=>{
    try{
      const order = await OrderModel.find({});
      res.json({success:true , message:order});
      
      
    }
    catch(err){
      res.json({success:false, message:err.message})
    }
  })
  

  // PLaceing order by Stripe 
  app.post("/stripeMode" , async(req,res)=>{
    try{
      
      const {userId,items,  paymentMode, price, address, } = req.body;
      const {origin} = req.header;
      const orderData = {
     
        userId,
        items,
        paymentMode,
        payment:false,
        price,
        address,
        date: Date.now(), // Set current timestamp
      };
       
      const newOrder = new OrderModel(orderData);
    const orderPlaced=  await newOrder.save();
    //   Stripe  Session
    const line_items = items.map((item)=>({
      price_data:{
        currency:"inr",
        product_data:{
          name:item.name
        } ,
        unit_amount:Math.round(item.price*100)
      } ,
      quantity:item.quantity
    }))
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name || 'Unnamed Product',
          },
          unit_amount: item.price * 100, // Convert price to smallest currency unit
        },
        quantity: item.quantity || 1,
      })),


      payment_method_types:["card"],
      success_url:"http://localhost:3000/paymentSuccessful",
      cancel_url: "http://localhost:3000/paymentUnsuceessful",
    
    })
  
    res.json({success:true,sessionId:session.id});
    }
    catch(err){
     res.json({success:false,message:err.message})
    }


    })

 
  
    // Signup login 
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
          secure: true,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000, 
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
            const token = jwt.sign(email+password , process.env.JWT_SECRET)
            res.json({success:true, token})
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

    
    



  app.listen(PORT, () => {
    console.log(`Server running on http://169.254.137.29:4000`);
    // mongoose.connect(process.env.MONGO_URL);
    mongoose.connect(uri)
    console.log("Database is successfully connected");
  });
  








