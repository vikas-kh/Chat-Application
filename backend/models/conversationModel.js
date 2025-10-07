import mongoose from "mongoose";
const conversationModel=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
})