import { ReactNode, createContext, useState, FC } from 'react'
import {
  ServiceContextType,
  ServiceContextValuesType,
} from '../types/service/service'

const defaultValue: ServiceContextValuesType = {
  totalPages: 0,
  page: 0,
  services: [],
  filters: { titleQuery: '', minPrice: 0, maxPrice: 1000000000 },
}

export const ServiceContext = createContext<ServiceContextType>({
  data: defaultValue,
  setData: () => {},
})

interface ServiceProviderProps {
  children: ReactNode
}

const ServiceProvider: FC<ServiceProviderProps> = ({ children }) => {
  const [data, setData] = useState<ServiceContextValuesType>(defaultValue)

  return (
    <ServiceContext.Provider value={{ data, setData }}>
      {children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider
