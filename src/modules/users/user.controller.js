import { User } from "../../../database/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendMail } from "../../email/email.js"
import { catchError } from "../../middleware/catchError.js"
import { appError } from "../../utils/appError.js"



const signup= catchError(async (req,res)=>{

  const user = await User.insertMany(req.body)
  sendMail(req.body.email)
  user[0].password = undefined
  res.status(201).json({message:"success" , user})
})



const signin= catchError(async (req,res,next)=>{

  const user = await User.findOne({email:req.body.email})

  if(!user || !bcrypt.compareSync(req.body.password , user.password) )
        return next(new appError("incorrect email or password ",404))
 
   
  jwt.sign({ userId:user.id ,  name:user.name ,  role:user.role} ,
             "My name is Hussein" ,  //secritKey
             (err , token)=>{
                  res.status(201).json({message:"login" , token})
           })



 })


export{
    signup,
    signin
}