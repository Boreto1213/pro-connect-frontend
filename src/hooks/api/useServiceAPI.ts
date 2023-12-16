import { CreateServiceRequest } from '../../types/service/create-service-request'
import { GetServiceResponse, Service } from '../../types/service/service'
import useAxiosPrivate from './useAxiosPrivate'

export const useServiceAPI = () => {
  const axiosPrivate = useAxiosPrivate()

  const createService = (data: CreateServiceRequest) => {
    return axiosPrivate.post('/services', data)
  }

  const getServiceById = (serviceId: number) => {
    return axiosPrivate.get<Service>(`/services/${serviceId}`)
  }

  const getServicesByPage = (page: number) => {
    return axiosPrivate.get<GetServiceResponse>(`/services?page=${page}`)
  }

  const getAllTags = () => {
    return axiosPrivate.get('/services/tags')
  }

  const getServicesFilterCriteriaAndPage = (
    page: number,
    titleQuery: string,
    minPrice: number,
    maxPrice: number
  ) => {
    return axiosPrivate.get<GetServiceResponse>(
      `/services/filter?page=${page}&titleQuery=${titleQuery}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
  }

  return { createService, getServicesByPage, getServicesFilterCriteriaAndPage, getServiceById, getAllTags }
}
