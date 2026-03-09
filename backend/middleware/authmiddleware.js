const jwt=require("jsonwebtoken")
exports.protect=(req,res,next)=>{
    let token=req.headers.authorization;
if(!token){
    res.status(401).json({msg:"no token"})

}
try{
    token=token.split(" ")[1]
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    req.user=decoded
    next()
}catch(error){
   res.json(error)
}
}