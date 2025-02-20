const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const sizeSchema = Schema({
    size:{
        type : String ,
        required : true
    },
    qty:{
        type:Number,
        required:true
    } ,
    productId: {
        type: String,  // Use ObjectId for productId
        // ref: 'Product',               // Reference to the Product model
        required: true
      },
    
})

module.exports =sizeSchema;