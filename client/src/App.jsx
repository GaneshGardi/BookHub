import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Books from './Components/Books'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import AddStudent from './Components/AddStudent'
import Logout from './Components/Logout'
import axios from 'axios'
import AddBook from './Components/AddBook'
import EditBook from './Components/EditBook'
import DeleteBook from './Components/DeleteBook'




function App() {
    const [role, setRole] = useState('')

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:4001/auth/verify')
        .then(res => {
            if (res.data.login) {
                setRole(res.data.role)
            } else {
                setRole('')
            }
            console.log(res)
        }).catch(err => console.log(err))
    }, [])

    return (
        <BrowserRouter>
            <Navbar role={role} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books' element={<Books role={role}/>} />
                <Route path='/login' element={<Login setRoleVar={setRole} />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/addstudent' element={<AddStudent />} />
                <Route path='/logout' element={<Logout setRole={setRole} />} />
                <Route path='/addbook' element={<AddBook />}></Route>
                <Route path='/book/:id' element={<EditBook />}></Route>
                <Route path='/delete/:id' element={<DeleteBook />}></Route>
            </Routes>
            
        </BrowserRouter>
      
    )
}

export default App
