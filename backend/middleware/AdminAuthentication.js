const jwt = require("jsonwebtoken");




const AdminAuthentication = async(req,res,next)=>{
    try{
           const {token} = req.headers;

           if(!token){
              return res.json({success:false, message:"User doesn't exist 11"})
           }
          const token_decode = jwt.verify(token, process.env.JWT_SECRET);
          if(token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"No use exist"})
          }
          next();
    }
    catch(err){
        res.json({success:false, message: err.message})
    }
}

module.exports = AdminAuthentication;