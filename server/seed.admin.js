import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/admin.models.js'
import './db.js'

async function adminAccount(){
    try {
        const adminCount = await Admin.countDocuments()
        if(adminCount === 0){
            const hashPassword = await bcrypt.hash('adminpassword',10)
            const newAdmin = new Admin({
                username: 'admin',
                password: hashPassword
            })
            await newAdmin.save()
            .then(console.log("Admin Account Created..."))
        }else{
            console.log("Admin Account Already Exists !")
        }
    } catch (error) {
        console.log("Error in creating Admin Account",error)
    }
}

adminAccount()