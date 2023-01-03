import mongoose from mongoose;

const submissionSchema = mongoose.Schema({
    links: [String],
    taskId: Number,
    userId: Number,
    description: String,
    remark: String,
    score: Number,
},{
    timestamp: true,
})

const Submission = mongoose.model("Submission", submissionSchema)

export default Submission;

