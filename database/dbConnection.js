import mongoose from "mongoose";

 

 export const dbConnection = mongoose.connect('mongodb://localhost:27017/Keep_Notes')
 .then(()=>{
    console.log("DataBase Connect Successfully...");
 })