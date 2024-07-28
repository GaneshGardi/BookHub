import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


function AddBook() {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      axios.get('http://localhost:4001/book/book/'+id)
      .then(res => {
        setName(res.data.name)
        setAuthor(res.data.author)
        setImageUrl(res.data.imageUrl)
      })
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4001/book/book/'+id, {name, author, imageUrl})
        .then(res => {
            if(res.data.updated){
                navigate('/books')
                toast.success("Book Edited Successfully")
            }else{
              console.log(res)
              toast.error("Something went wrong")
            }
        })
        .catch((err) => console.log("error in update book handle submit", err))
    }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-sky-200 p-4 rounded-lg w-96"
        onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold flex justify-center">
            Edit Book
          </h1>
          <div className="flex flex-col">
            <label htmlFor="book" className="mt-6 mb-1">
              Book Name:
            </label>
            <input
              placeholder="Enter Roll No..." required
              type="text" value={name}
              className="rounded-lg p-2"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="author" className="mt-6 mb-1">
              Author Name:
            </label>
            <input
              placeholder="Enter Author..." required
              type="text" value={author}
              className="rounded-lg p-2"
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="img" className="mt-6 mb-1">
              Image URL:
            </label>
            <input
              placeholder="Enter Image URL..." required
              type="text" value={imageUrl}
              className="rounded-lg p-2"
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </div>

          <button className="mt-12 bg-sky-500 w-full p-2 text-xl font-semibold rounded-lg hover:bg-sky-400 duration-200 mb-2">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBook
