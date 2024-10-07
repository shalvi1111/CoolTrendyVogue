const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/clothes.js");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));

app.engine("ejs" , ejsMate);
app.use(methodOverride('_method'));

main()
.then( () => {
    console.log("DB is connected" );
})
.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/ClothesProduct');
} 

  

app.listen(8080 , ()=>{
    console.log("Server is working")
}) ;
 
  //  Product Catelog


//   app.get("/testProducts" ,async(req,res)=>{
//       let SampleProducts = new Product({
//      title : "Denim Jacket",
//      description : "Polyster fabric" ,
//      price : 122 ,
//      sizes : ["S", "M", "L"]
  
//   }) 
//   await SampleProducts.save();
//   console.log(SampleProducts);
// })

  app.get("/products" ,  async (req,res)=>{
     
    const allProducts  = await Product.find({});
       res.render("products/index.ejs",{allProducts});
  });
  
  app.get("/products/new" , (req,res)=>{
    let  id = req.params.id ;
    const product =  Product.findById(id);
    res.render("products/new.ejs" , {product});
});



app.post("/products" , async(req,res)=>{

    // let product = req.body.product;
    const newProduct = new Product(req.body.product);
    await newProduct.save() ;
    console.log(req.body.product);
    // console.log(newProduct);
    // res.redirect("/products");
    // let product = req.body.product ;
    // console.log(product);
});


app.get("/products/:id" , async (req,res)=>{
  let    productId  =  req.params.id ; 
  const products =  await Product.findById(productId);
     res.render("products/show.ejs" , {products});
  // console.log(showProduct);
});

  
app.put("/products/:id" , async (req,res)=>{
  let id = req.params.id ;
 const productss = await Product.findByIdAndUpdate(id , {...req.body.product});
     console.log(productss,"....");
   res.redirect(`/products/${id}`);

});
  
 

 app.delete("/produsts/:id" , async(req,res)=>{
  let id = req.params.id ;
  const product = await Product.findByIdAndDelete(id);
  res.redirect("/products");
  console.log(product);
 }) ;

 app.get("/products/:id/edit" , async(req,res)=>{
  let id = req.params.id ;
  const product = await Product.findById(id );
  res.render("products/edit.ejs" , {product} );
});



