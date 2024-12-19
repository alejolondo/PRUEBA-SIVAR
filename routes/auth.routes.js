import {Router} from 'express'
import { check } from 'express-validator';
import { login } from '../controllers/auth.controller.js';


const router = Router()

router.post('/login',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is necesary').not().isEmpty()
    ] , login )





export default router;