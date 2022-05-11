import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Verify from './components/Verify'

const App = () => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(localStorage.getItem('User Token')) {
  //     navigate('/')
  //   } else {
  //     navigate('/login')
  //   }
  // }, [])

  return (
    <>
      <Routes>
        <Route exact path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
    </>
  )
}

export default App