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
       type:Array,
       required:true
    //    default:"https://unsplash.com/photos/a-woman-looking-at-clothes-hanging-on-a-rack-KLMtRhAs1TA",
    //    set :(v)=> v==="" ? "https://unsplash.com/photos/a-woman-looking-at-clothes-hanging-on-a-rack-KLMtRhAs1TA" :v
    //    url:String ,
    //    filename:String
      } ,
      category:{
        type:String,
        required:true
      },
      subCategory:{
        type:String,
        required:true
      },
      sizes:{
        type:Array,
        required:true
      },
      bestSeller:{
        type:Boolean
      },
      date:{
        type:Number,
        required:true
      },
    qty:{
        type:Number
    }

}) ;

  module.exports= productSchema;