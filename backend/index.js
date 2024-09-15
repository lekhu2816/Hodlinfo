import express from "express";
import connectDB from "./config/db.js";
import { getApiResponse,getTicketInfo } from "./controller/apiController.js";
const app=express();
import cors from 'cors';
import 'dotenv/config'
const PORT=5000||process.env.PORT
connectDB();
getApiResponse();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Server is running");
})
app.get('/api/get/result',getTicketInfo)
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})