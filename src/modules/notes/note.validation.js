import Joi from "joi";


 const addNoteVal = Joi.object({
    title:Joi.string().min(5).max(1000).required(),
    desc:Joi.string().min(5).max(3000).required(),
    createdBy:Joi.string().hex().length(24).required()
})
 
const updateNoteVal = Joi.object({
    title:Joi.string().min(5).max(1000),
    desc:Joi.string().min(5).max(3000),
    createdBy:Joi.string().hex().length(24),
    id:Joi.string().hex().length(24).required()
})


export{
    addNoteVal,
    updateNoteVal
}