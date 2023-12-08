import { Dispatch, FC, SetStateAction } from 'react'
import { cn } from '../../../lib/utils'
import { Service } from '../../../types/service/service'
import ServiceCardMD from './ServiceCardMD'
import { useNavigate } from 'react-router-dom'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'

interface ServicesListProps {
  services: Service[]
}

const ServicesList: FC<ServicesListProps> = ({ services }) => {
  const navigate = useNavigate()
  const getQueryParam = useGetQueryParam()
  const currentPage = Number(getQueryParam('page')) || 1
  const onClick = (serviceId: number) => navigate(`/dashboard/services?page=${currentPage}&popupOpen=true&seeReviews=false&selectedServiceId=${serviceId}`)

  return (
    <div className='col-span-7 h-full'>
      <div
        className={cn('flex flex-col gap-5 w-full', {
          'justify-center items-center h-full': services.length === 0,
        })}
      >
        {services.length ? (
          services.map((s) => (
            <ServiceCardMD onClick={() => onClick(s.id)} key={s.id} service={s} />
          ))
        ) : (
          <p className='w-full text-center text-3xl font-semibold text-gray-700'>
            No results found...
          </p>
        )}
      </div>
    </div>
  )
}

export default ServicesList
