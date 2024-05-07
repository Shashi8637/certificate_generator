import mongoose from 'mongoose';

const DBconnection = async()=>{
    const MONGODB_URL = process.env.DB_URL;
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("database connected succesfully")
    } catch (error) {
        console.log("error while connecting with the databse",error.message);
        
    }
}

export default DBconnection