import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { CreateMessage, GetAllMessages } from "../controllers/global.controller.js";



const router = Router();


router.post("/chat/send",authRequired, CreateMessage);
router.get("/chat/message", authRequired,GetAllMessages);




export default router