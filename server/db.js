import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const MONGOURI = process.env.MONGOURI


const Connection = async () => {
   try {
    mongoose.connect(MONGOURI)
    .then(console.log("Database connected Successfully😊"))
   } catch (error) {
    console.log("Error in connecting to DB", error)
   }
}

Connection()