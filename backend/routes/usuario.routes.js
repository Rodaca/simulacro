import { Router } from 'express';
import {check} from 'express-validator';
import { validateDocuments } from '../middlewares/validate.documents.js';  
import {getall, post, del, getone, put} from '../controllers/usuario.controllers.js';


const router = Router();

router.get("/", getall);

router.post("/", post);

router.delete("/:id", del);

router.get("/:id", getone);

router.put("/:id", put);


export default router;