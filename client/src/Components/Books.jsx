import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'

function Books({role}) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4001/book/books')
        .then(res => {
            setBooks(res.data)
            console.log(res.data)
        }).catch((err)=> console.log(err))
    },[])

    return (
        <div className='mt-20 ml-10'>
            
            <div className='flex flex-wrap justify-center gap-4'>
                {books.map(book => (
                    <div key={book.id} className='flex-1 min-w-[250px] max-w-[250px]'>
                        <BookCard book={book} role = {role}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books
