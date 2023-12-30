import axios from '../../api/axios'
import { LoginRequest, LoginResponse } from '../../types/login'
import { User } from '../../types/user/user'

const useAuthAPI = () => {
  const register = (user: Omit<User, 'id'>) => {
    return axios.post('/auth/register', user)
  }

  const login = (request: LoginRequest) => {
    return axios.post<LoginResponse>('/auth/authenticate', request).then((res) => res.data)
  }

  const googleLogin = (authCode: String) => {
    return axios.post<LoginResponse>('/auth/google', {authCode}).then((res) => res.data) 
  }

  return { register, login, googleLogin }
}

export default useAuthAPI
