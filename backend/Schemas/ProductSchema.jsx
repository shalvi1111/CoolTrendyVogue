const mongoose = require("mongoose") ;
const Schema = mongoose.Schema ;


const productSchema = Schema({

    //   image
    description :{
        type:String ,
        // required:true
       
    },
    title:{
       type:String ,
      //  required:true
     
    },
    price :{
        type:Number,
        // required: true
       
    } ,
    image : {
       type:Array,
      } ,
      category:{
        type:String,
        // required:true
      },
      bestSeller:{
        type:Boolean
      },
      date:{
        type:Number,
        // required:true
      },
       sizes:[
        {size : String ,
          qty :Number
        }
       ]

}) ;

  module.exports= productSchema;