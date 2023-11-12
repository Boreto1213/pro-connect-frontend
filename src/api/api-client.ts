import axios, { AxiosInstance } from 'axios'

export class APIClient<T> {
  protected endpoint: string
  protected axiosInstance: AxiosInstance

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.axiosInstance = this.createAxiosInstance()
    this.addResponseInterceptor()
  }

  // Remove the id prop from the entity type since its generated on the backend
  create = (entity: Omit<T, 'id'>) => {
    console.log('entity', entity)
    return this.axiosInstance
      .post(this.endpoint, entity)
      .then((res) => res.data)
  }

  getAll = () => {
    return this.axiosInstance.get<T[]>(this.endpoint).then((res) => res.data)
  }

  getById = (id: number) => {
    return this.axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data)
  }

  update = (entity: T) => {
    return this.axiosInstance.put(this.endpoint, entity)
  }

  delete = (id: number) => {
    return this.axiosInstance
      .delete<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data)
  }

  private createAxiosInstance = (): AxiosInstance => {
    return axios.create({
      baseURL: 'http://localhost:8080',
    })
  }

  private addResponseInterceptor = (): void => {
    this.axiosInstance.interceptors.response.use(
      function (res) {
        // Do smth before the request...
        // if (res.config.url == 'localhost')
        
        
        return res
      },
      function (error) {
        return Promise.reject(error)
      }
    )
  }
}
