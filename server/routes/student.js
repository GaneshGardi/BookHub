import express from 'express'
import { Student } from '../models/student.models.js'
import bcrypt from 'bcrypt'
import { verifyAdmin } from './auth.js'

const router = express.Router()

router.post('/register',verifyAdmin, async(req, res) => {
    try {
        const{rollno, username, grade, password} = req.body;
        const student = await Student.findOne({username})
        if(student){
           return res.status(409).json({message: 'student alredy exists'})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newstudent = new Student({
            username,
            password: hashPassword,
            rollno: rollno,
            grade
        })
        await newstudent.save()
        return res.json({registered: true})




    } catch (error) {
        res.json({message: 'error in registering student'})
    }
})

export {router as studentRouter}
