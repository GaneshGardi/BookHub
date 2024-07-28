import express from 'express'
import dotenv from 'dotenv'
import './db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { adminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { bookRouter } from './routes/book.js'
import { Book } from './models/book.models.js'
import { Student } from './models/student.models.js'
import { Admin } from './models/admin.models.js'

const app = express()
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/auth', adminRouter)
app.use('/student', studentRouter)
app.use('/book', bookRouter)


app.get('/dashboard', async(req, res) => {
    try {
        const book = await Book.countDocuments()
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        return res.json({ok: true, book, student, admin})
    } catch (error) {
        return res.json(error)
    }
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})