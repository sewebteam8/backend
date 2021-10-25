import express from 'express';
import { signUp, logIn,getAllUser } from '../controller/user.js';
import { enquiryMail } from '../controller/contact.js';
const route = express.Router();

route.post('/signup', signUp);
route.get('/users', getAllUser);
route.get('/login',logIn)
route.post('/enqMail', enquiryMail);


export default route;