import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('User Token')) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Routes>
        <Route exact path='/' element={<h1>Home</h1>} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App