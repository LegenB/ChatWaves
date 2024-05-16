import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';



const router = Router();


router.get("/task", authRequired,);

router.get("/task/:id", authRequired,);

router.post("/task", authRequired,);

router.delete("/task/id", authRequired,);

router.put("/task/:id", authRequired,);


export default router