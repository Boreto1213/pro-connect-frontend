import axios from '../api/axios'
import { LoginRequest } from '../types/login-request'

const useAuthService = () => {
  const register = (user: Omit<User, 'id'>) => {
    return axios.post('/auth/register', user)
  }

  const login = (request: LoginRequest) => {
    return axios.post('/auth/authenticate', request).then((res) => res.data)
  }

  return { register, login }
}

export default useAuthService
