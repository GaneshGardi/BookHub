import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {

  const [book, setBook] = useState(0)
  const [student, setStudent] = useState(0)
  const [admin, setAdmin] = useState(0)


  useEffect(() => {
    axios.get('http://localhost:4001/dashboard')
    .then(res => {
      if(res.data.ok){
        setBook(res.data.book)
        setStudent(res.data.student)
        setAdmin(res.data.admin)
      }
    }).catch(err => console.log(err))
  },[])
  

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='bg-sky-300 p-10 w-[400px]  rounded-xl my-8 mt-16'>
        <h1 className='font-bold text-2xl'>Total Number of Books</h1>
        <h1 className='font-bold text-2xl flex justify-center mt-2'>{book}</h1>
      </div>
      <div className='bg-sky-300 p-12 w-[400px] rounded-xl my-6'>
        <h1 className='font-bold text-2xl'>Total Number of Students</h1>
        <h1 className='font-bold text-2xl flex justify-center mt-2'>{student}</h1>
      </div>
      <div className='bg-sky-300 p-12 w-[400px] rounded-xl my-6'>
        <h1 className='font-bold text-2xl'>Total Number of Admins</h1>
        <h1 className='font-bold text-2xl justify-center flex mt-2'>{admin}</h1>
      </div>
     
      
    </div>
  )
}

export default Dashboard
