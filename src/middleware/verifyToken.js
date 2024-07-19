
import jwt from "jsonwebtoken"

export  const verifyToken = (req,res,next)=>{

    const {token} = req.headers
    jwt.verify(token,"My name is Hussein",async(err,decode)=>{
            if(err){ 
                 return  res.status(401).json({message:"invaled Token",err})
                }
            req.user = decode
            next()
        })

}