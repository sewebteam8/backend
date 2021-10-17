import express from 'express';
import { signUp, logIn,getAllUser } from '../controller/user.js';
const route = express.Router();

route.post('/signup', signUp);
route.get('/users', getAllUser);
route.get('/login',logIn)


export default route;