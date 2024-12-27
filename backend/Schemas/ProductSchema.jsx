const mongoose = require("mongoose") ;
const Schema = mongoose.Schema ;


const productSchema = Schema({

    //   image
    description :{
        type:String ,
        required:true
       
    },
    title:{
       type:String ,
       required:true
     
    },
    price :{
        type:Number,
        required: true
       
    } ,
    image : {
        url : String ,
        filename : String 
        // type:String
      } ,
    qty:{
        type:Number
    }

}) ;

  module.exports= productSchema;