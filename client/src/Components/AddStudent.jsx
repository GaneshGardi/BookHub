import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddStudent() {

    const [rollno, setRollno] = useState('')
    const [username, setUsername] = useState('')
    const [grade, setGrade] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4001/student/register', {rollno, username, grade, password})
        .then((res) => {
            if(res.data.registered){
              toast.success("Student Registed")
                navigate('/dashboard')
            }
            console.log(res)
        })
        .catch((err) => {
          console.log("error in add student handle submit", err)
          if(err.response){
            const {status} = err.response;

            if(status === 409){
              toast.error("Student Already Exists")
            }

          }else{
            toast.error("Something went wrong")
          }
        })
    }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-sky-200 p-4 rounded-lg w-96"
        onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold flex justify-center">
            Add Student
          </h1>
          <div className="flex flex-col">
            <label htmlFor="rollno" className="mt-6 mb-1">
              Roll No:
            </label>
            <input
              placeholder="Enter Roll No..." required
              type="text"
              className="rounded-lg p-2"
              onChange={(e) => setRollno(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="mt-6 mb-1">
              Username:
            </label>
            <input
              placeholder="Enter Username..." required
              type="text"
              className="rounded-lg p-2"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="grade" className="mt-6 mb-1">
              Grade:
            </label>
            <input
              placeholder="Enter Grade..." required
              type="text"
              className="rounded-lg p-2"
              onChange={(e) => setGrade(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mt-6 mb-1">
              Password:
            </label>
            <input
              placeholder="Enter Password..." required
              type="password"
              className="rounded-lg p-2"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button className="mt-12 bg-sky-500 w-full p-2 text-xl font-semibold rounded-lg hover:bg-sky-400 duration-200 mb-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
