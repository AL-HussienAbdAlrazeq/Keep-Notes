import { Schema, Types, model } from "mongoose";



const schema =new Schema({
    title:String,
    desc:String,
    user:{
        type:Types.ObjectId,
        ref:"User"
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    versionKey:false
})
export  const Note = model("Note" , schema)