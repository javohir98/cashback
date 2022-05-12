import Login from '../components/Login'
import Verify from '../components/Verify'
import Companies from '../pages/Companies'
import Products from '../pages/Products'
import NotFound from '../components/NotFound'

export const privateRoutes = [
    {path: '/', element: <Companies />, exact: true},
    {path: '/companies/:id/products', element: <Products />, exact: true},
    {path: '*', element: <NotFound to='/' />, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login />, exact: true},
    {path: '/verify', element: <Verify />, exact: true},
    {path: '*', element: <NotFound to='/login' />, exact: true},
]