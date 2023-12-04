import { CreateServiceRequest } from '../../types/service/create-service-request'
import useAxiosPrivate from './useAxiosPrivate'

export const useServiceAPI = () => {
  const axiosPrivate = useAxiosPrivate()

  const createService = (data: CreateServiceRequest) => {
    return axiosPrivate.post('/services', data)
  }

  return { createService }
}


