import { Router } from 'express';

import {getall, post, del, getone, put} from '../controllers/categoria.controllers.js';


const router = Router();

router.get("/", getall);

router.post("/", post);

router.delete("/:id", del);

router.get("/:id", getone);

router.put("/:id", put);


export default router;