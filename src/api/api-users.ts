import { APIClient } from './api-client'

class UserService<T> extends APIClient<T> {}

export default new UserService<User>('/users')