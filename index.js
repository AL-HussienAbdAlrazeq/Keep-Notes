process.on('uncaughtException' ,(err)=>{
  console.log("error",err);
})

import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './src/modules/users/user.routes.js'
import noteRouter from './src/modules/notes/note.routes.js'
import jwt from "jsonwebtoken"
import { User } from './database/models/user.model.js'
import { appError } from './src/utils/appError.js'
import { globalError } from './src/middleware/globalError.js'


const app = express()
process.on('uncaughtException', function (err) {
    console.log(err);
  });
const port = 3000
app.use(express.json())

app.use('/auth', userRouter)

app.use('/notes' , noteRouter)

app.get( '/verify/:token' ,async(req,res)=>{

  jwt.verify(req.params.token , 's7slala' , async(err,decode)=>{
    if(err)  { res.json(err)}

    else{
      await User.findOneAndUpdate({email:decode.email},{confirmEmail:true})
      res.json({message:"Success" ,email:decode.email})
    }

  })

} )


app.use('*',(req,res,next)=>{
  next(new appError(`Route not found ${req.originalUrl}`,404))
})


app.use(globalError)

process.on('unhandledRejection',(err)=>{
  console.log("error" ,err)
}) 
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))