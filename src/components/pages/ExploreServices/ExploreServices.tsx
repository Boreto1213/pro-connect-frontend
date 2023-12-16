import { FC, useEffect } from 'react'
import ServiceFilter from './ServiceFilter'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'
import { useServiceAPI } from '../../../hooks/api/useServiceAPI'
import { toast } from 'sonner'
import { useServices } from '../../../hooks/useServices'
import Pagination from '../../Pagination'
import ServicesList from './ServicesList'
import ServiceDetailsPopup from './ServiceDetailsPopup'

interface ExploreServicesProps {}

const ExploreServices: FC<ExploreServicesProps> = ({}) => {
  const { data, setData } = useServices()
  const getQueryParam = useGetQueryParam()
  const currentPage = Number(getQueryParam('page')) || 1
  const { getServicesFilterCriteriaAndPage } = useServiceAPI()

  useEffect(() => {
    const fetchServices = async () => {
      const res = await getServicesFilterCriteriaAndPage(
        currentPage,
        data.filters.titleQuery,
        data.filters.minPrice,
        data.filters.maxPrice
      )

      setData((prev) => ({
        page: currentPage,
        totalPages: res.data.totalPages,
        services: res.data.services,
        filters: { ...prev.filters },
      }))
    }

    try {
      fetchServices()
    } catch (error) {
      toast.error('Something went wrong.')
    }

    // reset the context filters on component dismount
    return () => {
      setData((prev) => ({
        ...prev,
        filters: { titleQuery: '', minPrice: 0, maxPrice: 1000000000 },
      }))
    }
  }, [currentPage, setData])


  return (
    <div className='flex flex-col px-8 py-6 justify-center'>
      <div className='grid grid-cols-10 w-full gap-0'>
        <ServiceFilter />
        <ServicesList services={data.services} />
        <div className='col-span-10'>
          <Pagination
            url={'/dashboard/services?page='}
            totalPages={data.totalPages}
            currentPage={currentPage}
          />
        </div>
      </div>

      <ServiceDetailsPopup />
    </div>
  )
}

export default ExploreServices
