import express from 'express';
import {getRandomUser} from '../controllers/me.js';

const router = express.Router();

router.get('/', getRandomUser);

export default router;