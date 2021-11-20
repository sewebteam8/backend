import express from 'express';
import { signUp, logIn,getAllUser } from '../controller/user.js';
import { newPost, updatePost, deletePost, getPost, getbyID } from '../controller/blog.js';
import { enquiryMail } from '../controller/contact.js';
const route = express.Router();

route.post('/signup', signUp);
route.get('/users', getAllUser);
route.get('/login',logIn)
route.post('/enqMail', enquiryMail);
route.post('/blog/add', newPost);
route.post('/blog/delete', deletePost)
route.get('/blog/get', getPost);
route.post('/blog/update', updatePost)
route.get('/blog/getbyID/:id', getbyID);

export default route;