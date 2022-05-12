import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { set_auth } from './redux/actions/UserActions'
import { privateRoutes, publicRoutes } from './routes/route'

const App = () => {
  const isLogin = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('User Token')) {
      dispatch(set_auth(true))
    }
  }, [])

  return (
    isLogin
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