
import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from './db/connectDB.js';
import cors from 'cors'
import bodyParser from 'body-parser'
import RegistrationRoute from './routes/registration.js'
import ProductRoute from './routes/product.js'

const PORT = process.env.SERVER_PORT || 5001

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/user", RegistrationRoute);
app.use("/api", ProductRoute);

const start = async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
        console.log("Server is running at port", PORT);
        })
    } catch (err) {
        console.log(err);
    }
}
start();