import React from 'react'
import { Link } from 'react-router-dom';

function BookCard({book, role}) {
    const {name, author, imageUrl} = book;

    return (
        <div className='flex justify-center hover:scale-105 duration-300'>
            <div className='flex justify-center flex-col p-3 bg-sky-300 w-[250px] h-[400px] rounded-xl'>
                <img src={imageUrl} alt={name} className='w-full h-3/5 object-cover rounded-t-xl' />
                <div className='p-3'>
                    <h2 className='font-bold text-xl'>Name: {name}</h2>
                    <p className='font-semibold text-lg'>Author: {author}</p>
                </div>
                {role === 'admin' && 
                <div className='flex justify-between p-2'>
                    
                <button className='bg-sky-500 px-3 py-2 rounded-lg font-semibold hover:bg-sky-400'><Link to={`/book/${book._id}`}>Edit</Link></button>
                <button className='bg-sky-500 px-3 py-2 rounded-lg font-semibold hover:bg-sky-400'><Link to={`/delete/${book._id}`}>Delete</Link></button>
              
                
            </div>
            }
                
            </div>
        </div>
    )
}

export default BookCard
