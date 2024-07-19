import { Schema, model } from "mongoose";



const schema =new Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    confirmEmail:{
        type:Boolean,
        default:false
    },role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
},{
    timestamps:{updatedAt:false},
    versionKey:false
})

export const User = model("User" ,schema )