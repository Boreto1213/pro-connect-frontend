import {
  ReactNode,
  createContext,
  useState,
  FC,
} from 'react'
import { Auth, AuthContextType } from '../types/auth'

const defaultAuthValue = { accessToken: '', refreshToken: '', email: '', password: '', role: '' }

export const AuthContext = createContext<AuthContextType>({
  auth: defaultAuthValue,
  setAuth: () => {},
})

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>(defaultAuthValue)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
