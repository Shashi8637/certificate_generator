import express from 'express';
import cors from 'cors';
import  DBconnection  from './database/db.js';
import {config} from 'dotenv';
import router from './routes/routes.js'

const PORT = process.env.PORT || 6010

const app = express();

config({
    path: './.env',
});

app.use(cors());

app.use(express.json());

app.use('/',router);



DBconnection();



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

