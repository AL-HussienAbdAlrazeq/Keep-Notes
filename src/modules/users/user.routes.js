import { Router } from "express";
import { signin, signup } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
import { validate } from "../../middleware/validate.js";
import { signInValidate, signUpValidate } from "./user.validation.js";


 const userRouter = Router()

userRouter.post('/signup' ,validate(signUpValidate) ,checkEmail , signup)
userRouter.post('/signin' , validate(signInValidate), signin)

export default userRouter

