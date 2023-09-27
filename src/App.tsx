import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthLayout from './pages/AuthLayout'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

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
  // {path: '/login', element: <Login />},
  // {path: '/register', element: <Register />}
])

function App() {
  return <RouterProvider router={router} />
}

export default App
