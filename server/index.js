import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/user.js";
import Task from "./models/Task.js";

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

app.get('/readUser', async (req, res)=>{
      const {email} = req.query
      const user = await User.findOne({
        email: email
      })

    res.json({
        success: true,
        message: 'user read successfully',
        data: user
    })
})

app.post('/addTask', async (req, res)=>{
    const { taskNo,taskTitle, taskDescription, deadLine, courseName} = req.body
    const task = new Task({
        taskNo: taskNo, 
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        deadLine: deadLine,
        courseName:courseName
    })
    const savedTask = await task.save()

    res.json({
        success: true,
        message: ' task added successfully',
        data: savedTask
    })
})

app.get('/readTask', async (req, res)=>{
   const {taskNo} = req.query
   const task = await Task.findOne({
     taskNo: taskNo
   })

   res.json({
    success: true,
    message: 'task read successfully',
    data: task
   })
})


app.listen(5000, ()=>{
    console.log('server started running on port 5000🤗')
})


