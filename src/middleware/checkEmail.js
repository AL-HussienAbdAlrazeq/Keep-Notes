
import bcrypt from "bcrypt"
import { User } from "../../database/models/user.model.js"

const checkEmail =async (req,res,next)=>{
    const isFound = await User.findOne({email:req.body.email})
    if(isFound) return res.status(409).json({message:"Email already Exist "})

    req.body.password = bcrypt.hashSync(req.body.password , 8)
    req.body.rePassword = bcrypt.hashSync(req.body.rePassword , 8)
    next()
}

export{
    checkEmail
}