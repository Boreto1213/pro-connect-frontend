import axios from '../../api/axios'
import { LoginRequest, LoginResponse } from '../../types/login'

const useAuthAPI = () => {
  const register = (user: Omit<User, 'id'>) => {
    return axios.post('/auth/register', user)
  }

  const login = (request: LoginRequest) => {
    return axios.post<LoginResponse>('/auth/authenticate', request).then((res) => res.data)
  }

  return { register, login }
}

export default useAuthAPI
