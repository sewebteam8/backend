import express from 'express';
<<<<<<< HEAD
import { signUp, logIn,getAllUser } from '../controller/user.js';
import { newPost, updatePost, deletePost, getPost, getbyID } from '../controller/blog.js';
=======
import { signUp, logIn, getAllUser,getUser } from '../controller/user.js';
import { newConversation,getConversation } from '../controller/conversation.js';
>>>>>>> 9cda6fbe42160997ff8817ddf8a7fe82790f5a8e
import { enquiryMail } from '../controller/contact.js';
import { addMessage, getMessage } from '../controller/message.js';
import auth from '../middleware/auth.js';
const route = express.Router();

route.post('/signup', signUp);
route.get('/users', getAllUser);
route.post('/login', logIn)
route.get('/user',auth,getUser);

route.post('/enqMail', enquiryMail);
<<<<<<< HEAD
route.post('/blog/add', newPost);
route.post('/blog/delete', deletePost)
route.get('/blog/get', getPost);
route.post('/blog/update', updatePost)
route.get('/blog/getbyID/:id', getbyID);
=======

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', addMessage);
route.get('/message/get/:id', getMessage);
>>>>>>> 9cda6fbe42160997ff8817ddf8a7fe82790f5a8e

export default route;