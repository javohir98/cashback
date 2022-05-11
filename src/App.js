import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Verify from './components/Verify'
import Companies from './pages/Companies'
import Products from './pages/Products'

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
        <Route exact path='/' element={<Companies />} />
        <Route path='companies/:id/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
    </>
  )
}

export default App