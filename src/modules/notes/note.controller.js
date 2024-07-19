import { Note } from "../../../database/models/note.model.js"
import { catchError } from "../../middleware/catchError.js"
import { appError } from "../../utils/appError.js"


const addNote=catchError(async (req,res)=>{
    req.body.user = req.user.userId
    const note = await Note.insertMany(req.body)
    res.status(201).json({message:"Success",note})
})


const findNote =catchError(async (req,res)=>{
    const note =  await Note.find({user:req.user.userId}).populate("user")
    res.status(201).json({message:"Founded",note})
})


const findNoteById = catchError(async(req,res)=>{
    const note = await Note.findById(req.params.id).populate("user")
    res.status(201).json({message:"Founded",note})
})


const updateNote = catchError(async(req,res)=>{
    const note = await Note.findByIdAndUpdate(req.params.id , req.body , {new:true}).populate("user")
    res.status(200).json({message:"Updated",note})
})



const deleteNote=catchError(async(req,res,next)=>{
    // const note = await Note.findByIdAndDelete(req.params.id,req.body)
    // if(!note) return next(new appError("not Found this Note",404))
    // res.status(200).json({message:"Deleted",note})

    const note = await Note.findOneAndUpdate({_id:req.params.id , user:req.user.userId } , {isDeleted:true} , {new:true})// {},null
    if(!note) return next(new appError("not allowed to delete  this Note",404))
    res.status(200).json({message:"Deleted",note})
})



export{
    addNote,
    findNote,
    findNoteById,
    updateNote,
    deleteNote
}