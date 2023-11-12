import { APIClient } from './api-client'

type LoginRequest = {
  email: string
  password: string
}

class UserService<T> extends APIClient<T> {
  login = (body: LoginRequest) => {
    return this.axiosInstance
      .post('/auth/authenticate', body)
      .then((res) => res.data)
  }
}

export default new UserService<User>('/users')