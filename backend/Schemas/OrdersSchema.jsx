const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const OrderShema = Schema({
    // Image

    qty:{
        type:Number
    } ,

   price: {
    type : Number
   },

   title :{
    type : String
   } ,

   size:{
    type: Array 
   }
})

module.exports= OrderShema;