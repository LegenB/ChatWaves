import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { CreateMessage, GetMessages } from "../controllers/global.controller.js";



const router = Router();


router.post("/chat", CreateMessage);





export default router