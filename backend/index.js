import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config({});
const app=express();

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    connectDB();
    console.log(`listening at port ${PORT}`);
})