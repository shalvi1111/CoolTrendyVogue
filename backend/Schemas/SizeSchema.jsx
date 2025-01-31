const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const sizeSchema = Schema({
    size:{
        type : String ,
        required : true
    }
})

module.exports =sizeSchema;