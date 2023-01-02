import mongoose from mongoose;

const submissionSchema = mongoose.schema({
    links: [String],
    taskId: Number,
    userId: Number,
    description: String,
    remark: String,
    score: Number,
},{
    timestamp: true,
})

const Submission = mongoose.Model("Submission", submissionSchema)

export default Submission;

