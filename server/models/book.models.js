import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            
        },
        author: {
            type: String,
            required: true,
        
        },
        imageUrl: {
            type: String,
            required: true
        }
    })

const Book = mongoose.model("Book", bookSchema)

export {Book}