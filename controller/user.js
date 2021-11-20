import User from "../modals/User.js";
import jwt from 'jsonwebtoken';

export const signUp = async (request, response) => {
   
    if (!request.body.name || !request.body.email ||!request.body.password)
    {
        return response.status(400).send({
            message: 'need email ,password,name'
        })
    }
    try {
        console.log(request.body)
        let exist = await User.findOne({
            email: request.body.email
        });

        if (exist) {
            return response.status(500).json('user already exists');
        }
        
        const newUser = new User(request.body);
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, "studywellraj", { expiresIn: 3600 });
        if (!token) throw Error('Couldnt sign the token');
        return response.status(200).json({ token,newUser });
    } catch (error) {
        console.log(error)
        return response.status(500).json(error);
    }
}

export const getAllUser = async (request, response) => {
    try {
        const user = await User.find({});
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}
export const logIn = async (request, response) =>
{
   if (!request.body.email || !request.body.password) {
       return response.status(400).send({
           message: 'need username and password'
       })
   }

   const invalid = {
       message: 'Invalid email and passoword combination'
   }

   try {
       const user = await User.findOne({
               email: request.body.email
           })
           .exec()

       if (!user) {
           return response.status(401).send(invalid)
       }

       const match = await user.checkPassword(request.body.password)

       if (!match) {
           return response.status(401).send(invalid)
       }
        const token = jwt.sign({ id: user._id },"studywellraj", {
        expiresIn: 3600
        });
      
       return response.status(201).send({token,user})
   } catch (e) {
       console.error(e)
       response.status(500).end()
   }
}
export const getUser = async (request, response) => {
    try {
        const user = await User.findById(request.user.id).select('-password');
        if (!user) throw Error('User does not exist');
        response.json(user);
    } catch (e) {
        response.status(400).json({
            msg: e.message
        });
    }
}
