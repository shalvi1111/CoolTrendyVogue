const { model } = require("mongoose");
const sizeSchema = require("../Schemas/SizeSchema.js");

const sizeModel = model("sizeModel", sizeSchema);

module.exports = sizeModel;
