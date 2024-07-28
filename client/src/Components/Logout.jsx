import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({ setRole }) {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4001/auth/logout')
        .then(res => {
            if (res.data.logout) {
                setRole('')
                navigate('/')
            }
        }).catch(err => console.log(err))
    }, [setRole, navigate])

    return null
}

export default Logout
