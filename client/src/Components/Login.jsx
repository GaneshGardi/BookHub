import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


import {toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios'
import { Student } from '../../../server/models/student.models';

function Login({setRoleVar}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')

  const navigate = useNavigate()


  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4001/auth/login', {username, password, role})
    .then((res) => {
      if(res.data.login && res.data.role === 'admin'){

        console.log("admin logged in")
        toast.success("Logged In as Admin")
        setRoleVar('admin')
        navigate('/dashboard')
      
      
      }else if(res.data.login && res.data.role === 'student'){
        console.log("student logged in")
        toast.success("Logged In as Student")
        setRoleVar('student')
        navigate('/')
      }
      console.log(res)
    })
    .catch(err => {
      console.log(err)
      if(err.response){
        const { status } = err.response;
        
        if (status === 404){
          if(role === 'admin'){
            toast.error("Admin not Registered !")
          }
          if(role === 'student'){
            toast.error("Student not Registered")
          }
        }
        if(status === 401)
          {
            toast.error("Incorrect Password")
          }
        
      }
    })

  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg-sky-200 p-4 rounded-lg w-96'
      onSubmit={handleSubmit}>
          <h1 className='text-3xl font-bold flex justify-center'>LogIn</h1>
        <div className='flex flex-col'>
          <label htmlFor='username' className='mt-6 mb-1'>Username:</label>
          <input placeholder='Enter Username...' required
          type='text'
          className='rounded-lg p-2'
          onChange={(e)=>setUsername(e.target.value)}
          ></input>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='mt-6 mb-1'>Password:</label>
          <input placeholder='Enter Password...' required
          type='password'
          className='rounded-lg p-2'
          onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>
        <div className='mt-6 flex flex-col'>
        <label htmlFor='Role' className='mb-1'>Role:</label>
        <select className='p-2 rounded-lg'
        onChange={(e)=>setRole(e.target.value)}>
          <option>
              admin
          </option>
          <option>
              student
          </option>
        </select>
        </div>
        <button className='mt-12 bg-sky-500 w-full p-2 text-xl font-semibold rounded-lg hover:bg-sky-400 duration-200 mb-2'>
          LogIn
        </button>
      </form>
   
    </div>
  )
}

export default Login
