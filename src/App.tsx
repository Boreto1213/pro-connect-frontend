import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import AuthLayout from './pages/AuthLayout'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Providers from './components/Providers'

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
])

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}

export default App
