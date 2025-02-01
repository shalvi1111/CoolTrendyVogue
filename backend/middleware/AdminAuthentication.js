const jwt = require("jsonwebtoken");




const AdminAuthentication = async(req,res,next)=>{
    try{
           const {result} = req.headers;

           if(!result){
              return res.json({success:false, message:"User doesn't exist"})
           }
          const result_expand = jwt.verify(result, process.env.JWT_SECRET);
          if(result_expand != process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"No use exist"})
          }
          next();
    }
    catch(err){
        res.json({success:false, message: err.message})
    }
}

module.exports = AdminAuthentication;