import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Verify from './components/Verify'
import Companies from './pages/Companies'
import Products from './pages/Products'
import { privateRoutes, publicRoutes } from './routes/route'

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    localStorage.getItem('User Token')
      ? <Routes>{privateRoutes.map(route => (
          <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
        ))}
      </Routes>
      : <Routes>{publicRoutes.map(route => (
          <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
        ))}</Routes>
  )
}

export default App