import { Router } from "express";
import { addNote, deleteNote, findNote, findNoteById, updateNote } from "./note.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { validate } from "../../middleware/validate.js";
import { addNoteVal, updateNoteVal } from "./note.validation.js";



const noteRouter = Router()

noteRouter.use(verifyToken)

noteRouter.post('/' , validate(addNoteVal),addNote)
noteRouter.get('/' ,findNote)
noteRouter.get('/:id' , findNoteById)
noteRouter.put('/:id' ,  validate(updateNoteVal) , updateNote)
noteRouter.delete('/:id' , deleteNote)





export default noteRouter