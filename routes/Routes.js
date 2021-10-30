import express from 'express';
import { signUp, logIn, getAllUser } from '../controller/user.js';
import { newConversation,getConversation } from '../controller/conversation.js';
import { enquiryMail } from '../controller/contact.js';
import { addMessage,getMessage } from '../controller/message.js';
const route = express.Router();

route.post('/signup', signUp);
route.get('/users', getAllUser);
route.post('/login', logIn)

route.post('/enqMail', enquiryMail);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', addMessage);
route.get('/message/get/:id', getMessage);

export default route;