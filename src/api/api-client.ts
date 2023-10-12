import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
})

export class APIClient<T> {
  private endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  // Remove the id prop from the entity type since its generated on the backend
  create = (entity: Omit<T, 'id'>) => {
    console.log('entity', entity)
    return axiosInstance.post(this.endpoint, entity).then(res => res.data)
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then(res => res.data)
  }

  getById = (id: number) => {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data)
  }

  update = (entity: T) => {
    return axiosInstance.put(this.endpoint, entity)
  }

  delete = (id: number) => {
    return axiosInstance.delete<T>(`${this.endpoint}/${id}`).then(res => res.data)
  }
}