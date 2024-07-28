import express from 'express'
import { Book } from '../models/book.models.js'
import { verifyAdmin } from './auth.js'

const router = express.Router()

router.post('/add',verifyAdmin, async(req, res) => {
    try {
        const{name, author, imageUrl} = req.body;
        const book = await Book.findOne({name})
        if(book){
           return res.status(404).json({message: 'book alredy exists'})
        }
        const newbook = new Book({
            name,
            author,
            imageUrl
        })
        await newbook.save()
        return res.json({added: true})


    } catch (error) {
        res.json({message: 'error in adding book'})
    }
})

router.get('/books', async(req,res) => {
    try {
        const books = await Book.find()
        return res.json(books)
    } catch (error) {
        return res.json(error)
    }
})

    router.get('/book/:id', async(req, res) => {
        try {
            const id = req.params.id;
            const book = await Book.findById({_id: id})
            return res.json(book)
        } catch (error) {
            return res.json(error)
        }
    })

    router.put('/book/:id', async(req, res) => {
        try {
            const id = req.params.id;
            const book = await Book.findByIdAndUpdate({_id: id}, req.body, {new: true})
            return res.status(200).json({updated: true})
        } catch (error) {
            return res.json(error)
        }
    })


    router.delete('/book/:id', async(req,res) =>{
        try {
            const id = req.params.id;
            const book = await Book.findByIdAndDelete({_id: id}, req.body)
            return res.status(200).json({deleted: true, book})
        } catch (error) {
            return res.json(error)
        }
    })

export {router as bookRouter}
