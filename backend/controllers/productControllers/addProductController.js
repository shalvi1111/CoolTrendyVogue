const upload = require("../../middleware/multer.js");
const cloudinary = require("../../utills/cloudinaryConfig.js");
const ProductModel = require("../../models/ProductModel.js");

(module.exports.addProductController = upload.fields([
  { name: "imageF", maxCount: 1 },
  { name: "imageS", maxCount: 1 },
  { name: "imageT", maxCount: 1 },
  { name: "imageFourth", maxCount: 1 },
])),
  async (req, res) => {
    const {
      title,
      category,
      description,
      price,
      // subCategory,
      // sizes ,
      bestSeller,
      // qty
    } = req.body;

    const imageF = req.files.imageF && req.files.imageF[0];
    const imageS = req.files.imageS && req.files.imageS[0];
    const imageT = req.files.imageT && req.files.imageT[0];
    const imageFourth = req.files.imageFourth && req.files.imageFourth[0];

    const images = [imageF, imageS, imageT, imageFourth].filter(
      (item) => item !== undefined
    );
    let imageurl = await Promise.all(
      images.map(async (item) => {
        let result1 = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result1.secure_url;
      })
    );

    const newPrdouct = new ProductModel({
      title,
      category,
      description,
      price: Number(price),

      bestSeller: bestSeller === "true" ? true : false,
      image: imageurl,
      // qty: Number(qty),
      date: Date.now(),
    });
    await newPrdouct.save();
    res.json({ success: true, message: "Product Added" });
  };
