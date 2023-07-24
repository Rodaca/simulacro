import { Router } from 'express';
import {check} from 'express-validator';
import { validateDocuments } from '../middlewares/validate.documents.js';  
import {getall, post, del, getone, put} from '../controllers/prodcuto.controllers.js';
import Categoria from "../models/categorias.js";

const router = Router();

router.get("/all", getall);

router.post("/add",[
    check('categorias').custom(async(nombre= "")=>{
        const hayCategoria =await Categoria.findOne({tipo});
        if(!hayCategoria){
            throw new Error(`La categoria ${tipo} no esta registrado`)
        }
    }),
    validateDocuments 
], post);

router.delete("/del/:id", del);

router.get("/one/:id", getone);

router.put("/upd/:id", put);


export default router;