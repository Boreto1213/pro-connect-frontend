import { Dispatch, SetStateAction } from 'react'
import { Category } from './category'
import { Expert } from '../user/user'

export type Service = {
  id: number
  title: string
  expert: Expert
  price: number
  description: string
  tags: Category[]
}

export type GetServiceResponse = {
  totalPages: number
  currentPage: number
  services: Service[]
}

export type ServiceContextValuesType = {
  totalPages: number
  page: number
  services: Service[]
  filters: ServiceFilterType
}

type ServiceFilterType = {
  titleQuery: string
  minPrice: number
  maxPrice: number
}

export type ServiceContextType = {
  data: ServiceContextValuesType
  setData: Dispatch<SetStateAction<ServiceContextValuesType>>
}

export type Tag = {
  text: string
  id: number
}