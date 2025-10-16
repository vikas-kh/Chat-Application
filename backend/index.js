import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
dotenv.config({});
const app=express();

//middleware
app.use(express.json());

app.use("/api/v1/user", userRoute);

const PORT=process.env.PORT;
app.listen(8080,()=>{
    connectDB();
    console.log(`listening at port ${PORT}`);
})