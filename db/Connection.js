import mongoose from 'mongoose';

const Connection = async () => {
    const URL = process.env.DBURI
    console.log(URL)
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
    
};

export default Connection;