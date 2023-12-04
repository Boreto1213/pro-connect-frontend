import { FC, useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/api/useAxiosPrivate'
import ServiceFilter from './ServiceFilter'
import ServiceCardMD from './ServiceCardMD'
import { Service } from '../../../types/service/service'

interface ExploreServicesProps {}

const ExploreServices: FC<ExploreServicesProps> = ({}) => {
  const [services, setServices] = useState<Service[]>([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const fetchServices = async () => {
      const res = await axiosPrivate.get('/services/expert/6')

      setServices(res.data)
    }

    try {
      fetchServices()
    } catch (error) {
      console.log('Error from component', error)
    }

    return () => {}
  }, [])

  return (
    <div className='flex flex-col px-8 py-6 justify-center'>
      <div className='grid grid-cols-10 w-full gap-0'>
        <ServiceFilter />
        <div className='col-span-7 h-full'>
          <div className='flex flex-col gap-5 w-full'>
            {services.length &&
              services.map((s) => <ServiceCardMD key={s.id} service={s} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreServices
