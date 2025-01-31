const {model} = require("mongoose");
const sizeSchema = require("../Schemas/SizeSchema.jsx");

const sizeModel = new model("size" , sizeSchema);

module.exports= sizeModel;