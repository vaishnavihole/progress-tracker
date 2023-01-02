import mongoose from "mongoose";
import express from "express";

const app = express();
app.use(express.json())

app.get('/health',(req, res)=>{
   res.json({
    success: true,
    Message: 'All Good'
   })
})

app.listen(5000, ()=>{
    console.log('server started running on port 5000🤗')
})


