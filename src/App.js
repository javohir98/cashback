import axios from 'axios'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Verify from './components/Verify'

const App = () => {
  const navigate = useNavigate()

  const handleApi = async () => {
    axios.get('https://api.uracashback.uz/companies', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('User Token')}`
      }
    })
    .then((response) => {
      console.log(response.data.items);
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Routes>
        <Route exact path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <button onClick={handleApi}>test api</button>
    </>
  )
}

export default App