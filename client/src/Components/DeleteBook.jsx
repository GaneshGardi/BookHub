import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteBook() {
    const navigate = useNavigate()
    const{id} = useParams()

    useEffect(() => {
        axios.delete('http://localhost:4001/book/book/'+id)
        .then(res => {
            if(res.data.deleted){
                navigate('/books')
                toast.warning("Book Deleted Successfully")
            }
        })
    })
}

export default DeleteBook
