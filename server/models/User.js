import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    role: String,
},{
    timestamps: true
})

const User = mongoose.Model("User", userSchema)

export default User;
