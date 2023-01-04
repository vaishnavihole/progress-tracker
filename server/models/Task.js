import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    taskNo: String,
    taskTitle: String,
    taskDescription: String,
    deadLine: Date,
    courseName: String,
},{
    timestamps:true
})

const Task = mongoose.model("Task", taskSchema)

export default Task;


