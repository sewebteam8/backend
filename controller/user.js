import User from "../modals/User.js";


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
        return response.status(200).json(newUser);
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

      
       return response.status(201).send({user})
   } catch (e) {
       console.error(e)
       response.status(500).end()
   }
}