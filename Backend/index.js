import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const PORT = process.env.PORT
const Mongo = process.env.MONGO_URI

mongoose.connect(Mongo).then(() => 
    console.log("CONNECTED TO MONGOdb")
).catch((err) => {
    console.log(err);
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
