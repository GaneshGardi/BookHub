import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Student } from '../../../server/models/student.models'


function AddBook() {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4001/book/add', {name, author, imageUrl})
        .then(res => {
            if(res.data.added){
              toast.success("Book Added Successfully")
                navigate('/books')
            }
            console.log(res)
        })
        .catch((err) => {
          console.log("error in add book handle submit", err)
          if(err.response){
            const {status} = err.response;

            if(status === 404){
              toast.error("Book Already Exists")
            }
            
          }
        })
    }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-sky-200 p-4 rounded-lg w-96"
        onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold flex justify-center">
            Add Book
          </h1>
          <div className="flex flex-col">
            <label htmlFor="book" className="mt-6 mb-1">
              Book Name:
            </label>
            <input
              placeholder="Enter Roll No..." required
              type="text"
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
              type="text"
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
              type="text"
              className="rounded-lg p-2"
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </div>

          <button className="mt-12 bg-sky-500 w-full p-2 text-xl font-semibold rounded-lg hover:bg-sky-400 duration-200 mb-2">
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBook
