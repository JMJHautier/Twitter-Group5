import {getAllUsers, getSingleUser, getUserMessage} from '../controllers/user.js'
import express from 'express'

const router = express.Router(); 

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.get('/:id/message', getUserMessage);

export default router