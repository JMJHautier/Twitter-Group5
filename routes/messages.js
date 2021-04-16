import express from 'express';
import {getAllMessages, getSingleMessage} from '../controllers/message.js'

const router = express.Router(); 

router.get('/', getAllMessages);
router.get('/:id',getSingleMessage);

export default router;