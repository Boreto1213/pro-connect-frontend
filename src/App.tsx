import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/pages/AuthLayout/AuthLayout'
import LoginForm from './components/pages/AuthLayout/LoginForm'
import RegisterForm from './components/pages/AuthLayout/RegisterForm'
import Providers from './components/Providers'
import DashboardLayout from './components/pages/DashboardLayout/DashboardLayout'
import Home from './components/pages/Home/Home'

const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/auth/login' /> },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
    ],
  },
  { path: '/dashboard', element: <DashboardLayout />, children: [
    { path: 'home', element: <Home />}
  ] },
])

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}

export default App
