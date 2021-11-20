import express from 'express';
import { signUp, logIn,getAllUser } from '../controller/user.js';
import { newPost, updatePost, deletePost, getPost, getbyID } from '../controller/blog.js';
import { signUp, logIn, getAllUser,getUser } from '../controller/user.js';
import { newConversation,getConversation } from '../controller/conversation.js';
import { enquiryMail } from '../controller/contact.js';
import { addMessage, getMessage } from '../controller/message.js';
import auth from '../middleware/auth.js';
const route = express.Router();

route.post('/signup', signUp);
route.get('/users', getAllUser);
route.post('/login', logIn)
route.get('/user',auth,getUser);

route.post('/enqMail', enquiryMail);
route.post('/blog/add', newPost);
route.post('/blog/delete', deletePost)
route.get('/blog/get', getPost);
route.post('/blog/update', updatePost)
route.get('/blog/getbyID/:id', getbyID);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', addMessage);
route.get('/message/get/:id', getMessage);

export default route;