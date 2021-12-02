import express from 'express';
import cors from 'cors';
import urlencoded from 'body-parser';
import json from 'body-parser';
import  morgan from 'morgan'
import dotenv from 'dotenv';
import Connection from './db/Connection.js'
import Routes from './routes/Routes.js'
import fileUpload from 'express-fileupload';
import  Socketconnection from './socket.js'

dotenv.config();
const app = express();

const PORT = process.env.PORT || 7000
app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(fileUpload());
app.use(urlencoded({
    extended: true
}))
app.use(morgan('dev'))
app.use('/services', Routes);
app.use(express.static('./public/pic'))

const start = async () => {
    try {
        await Connection();
        app.listen(PORT, () => {
            console.log(`Server is running successfully on PORT ${PORT}`)
        })


        Socketconnection();

    } catch (e) {
        console.error(e)
    }
};
start()

