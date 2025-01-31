const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = Schema({
    // UserId:{
    //     type : String ,
    //     required: true
    //    },
    //    image , title, price , qty , sizes ,
    image:{
        type:Array ,
        required:true
    } ,
     title:{
        type:String,
        required: true
     },
     qty:{
        type:Number ,
        required:true
     },
     sizes:{
        type:Array,
        required:true
     },
     price:{
        type:Number,
        required:true
     }

})
  
module.exports = CartSchema;