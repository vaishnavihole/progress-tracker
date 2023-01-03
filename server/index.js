import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/user.js";

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URL, ()=>{
    console.log('Connected to mongodb📦');
})

app.get('/health',(req, res)=>{
   res.json({
    success: true,
    Message: 'All Good'
   })
})

app.post('/addUser', async (req, res)=>{
    const {name, email, role} = req.body;
    const user = new User({
        name: name,
        email: email,
        role: role,
    })
    
    const savedUser = await user.save()

    res.json({
        success: true,
        message: 'user added successfully',
        data: savedUser
    })
})

app.listen(5000, ()=>{
    console.log('server started running on port 5000🤗')
})


