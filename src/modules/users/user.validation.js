  
import Joi from "joi"

const signUpValidate =  Joi.object({
    name: Joi.string().min(2).max(40).required(),
    email:Joi.string().required(),
    password:Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).message('InValid Password'),
    rePassword:Joi.valid(Joi.ref('password')).required(),
    age:Joi.number().min(8).max(100).required()
  })

  const signInValidate =  Joi.object({
    email:Joi.string().required(),
    password:Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).message('InValid Password'),
  })


  export{
    signUpValidate,
    signInValidate
  }