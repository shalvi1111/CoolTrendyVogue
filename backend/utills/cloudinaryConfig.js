const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your API secret
});

module.exports = cloudinary;

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'uploads',
//    allowed_formats: ['jpeg', 'png', 'jpg'], // supports promises as well
//     // public_id:  'first_cloudinary',
//   },
// });
 
// const parser = multer({ storage: storage });

// module.exports = parser;