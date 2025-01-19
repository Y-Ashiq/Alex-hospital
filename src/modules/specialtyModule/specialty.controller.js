import specialtySchema from "../../../database/models/specialty.model.js";
import { handleError } from "../../middleware/handleError.js";
import { AppError } from "../../util/AppError.js";



/**
 * CRUD for specialty
 */

const addSpecialty = handleError(async (req, res, next) => {
    

    let {name} = req.body

   const result =  await specialtySchema.findOne({where:{name}});

   if(result){

    return next(new AppError("this field is already exist" , 406))

   }else{

    await specialtySchema.create({name})
    res.status(200).json({message:" specialty added"})


   }




})

const getSpecialty = handleError(async (req, res, next) => {
let id = req.params;

const result =  await specialtySchema.findOne({where:{id}});


if(!result){

    return next(new AppError("this specialty not found" , 400))

   }else{

    res.status(200).json({message:"result"})


   }



})
const updateSpecialty = handleError(async (req, res, next) => {

    let {name} = req.body;

    const result =  await specialtySchema.findOne({where:{name}});


if(!result){

    return next(new AppError("this specialty not found" , 400))

   }else{

    res.status(200).json({message:"result"})


   }





})
const removeSpecialty = handleError(async (req, res, next) => {




})
export default{addSpecialty}