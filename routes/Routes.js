import express from 'express';
import { signUp, logIn, getAllUser } from '../controller/user.js';
import { enquiryMail } from '../controller/contact.js';
const route = express.Router();

route.post('/signup', signUp);
route.get('/users', getAllUser);
route.post('/login',logIn)
// route.post('/conversation/add', newConversation);
// route.post('/conversation/get', getConversation);
route.post('/enqMail', enquiryMail);

// route.post('/message/add', newMessage);
// route.get('/message/get/:id', getMessage);

export default route;