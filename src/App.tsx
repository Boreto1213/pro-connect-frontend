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
import EditExpertProfileForm from './components/pages/Profile/EditExpertProfileForm'
import Unauthorized from './components/pages/Unauthorized/Unauthorized'
import NotFound from './components/pages/NotFound/NotFound'
import RequireAuth from './components/RequireAuth'
import ExploreServices from './components/pages/ExploreServices/ExploreServices'
import CreateService from './components/pages/CreateService/CreateService'
import ExploreExperts from './components/pages/ExploreExperts/ExploreExperts'
import Chats from './components/pages/Chats/Chats'
import Checkout from './components/pages/Checkout/Checkout'
import CheckoutStatus from './components/pages/Checkout/CheckoutStatus'
import PaymentLayout from './components/pages/Checkout/PaymentLayout'
import Statistics from './components/pages/Statistics/Statistics'

enum Roles {
  EXPERT = 'ROLE_Expert',
  CLIENT = 'ROLE_Client',
}
const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/auth/login' /> },
  {
    path: '/auth',
    element: (
      <Providers>
        <AuthLayout />
      </Providers>
    ),
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <Providers>
        <DashboardLayout />
      </Providers>
    ),
    children: [
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [{ path: 'home', element: <Home /> }],
        // children: [{ path: 'home', element: <Checkout /> }],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
            children: [
              { index: true, element: <ProfileInfo /> },
              { path: 'edit', element: <EditExpertProfileForm /> },
            ],
          },
        ],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [
          { path: 'services', element: <ExploreServices /> },
          { path: 'services/create', element: <CreateService /> },
        ],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [{ path: 'experts', element: <ExploreExperts /> }],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.EXPERT, Roles.CLIENT]} />,
        children: [{ path: 'chats', element: <Chats /> }],
      },
      {path: 'statistics', element: <Statistics />},
      { path: 'unauthorized', element: <Unauthorized /> },
    ],
  },
  {
    path: '/payment',
    element: (
      <Providers>
        <PaymentLayout />
      </Providers>
    ),
    children: [
      { path: 'checkout', element: <Checkout /> },
      { path: 'return', element: <CheckoutStatus /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
