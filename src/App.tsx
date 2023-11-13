import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/pages/AuthLayout/AuthLayout'
import LoginForm from './components/pages/AuthLayout/LoginForm'
import RegisterForm from './components/pages/AuthLayout/RegisterForm'
import Providers from './components/Providers'
import DashboardLayout from './components/pages/DashboardLayout/DashboardLayout'
import Home from './components/pages/Home/Home'
import Profile from './components/pages/Profile/Profile'
import ProfileInfo from './components/pages/Profile/ProfileInfo'
import EditProfile from './components/pages/Profile/EditProfile'
import Unauthorized from './components/pages/Unauthorized/Unauthorized'
import NotFound from './components/pages/NotFound/NotFound'
import RequireAuth from './components/RequireAuth'
import ExploreServices from './components/pages/ExploreServices/ExploreServices'

enum Roles {
  EXPERT = 'Expert',
  CLIENT = 'Client',
}
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
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [{ path: 'home', element: <Home /> }],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
            children: [
              { index: true, element: <ProfileInfo /> },
              { path: 'edit', element: <EditProfile /> },
            ],
          },
        ],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [
          {path: 'services', element: <ExploreServices />}
        ]
      },
      { path: 'unauthorized', element: <Unauthorized /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}

export default App
