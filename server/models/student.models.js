import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        rollno: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        grade: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })

const Student = mongoose.model("Student", studentSchema)

export {Student}