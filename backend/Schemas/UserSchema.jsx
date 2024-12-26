const mongoose = require("mongoose") ;
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");
const PassportLocalMongoose = require("passport-local-mongoose");


const userSchema = Schema({

    email :{
        type: String ,
        required : [true,"Please enter the email"],
        unique : true 
    }
})

  userSchema.plugin(PassportLocalMongoose);
module.exports= userSchema;
