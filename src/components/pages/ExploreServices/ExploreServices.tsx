import { FC, useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'

interface ExploreServicesProps {
  
}

const ExploreServices: FC<ExploreServicesProps> = ({}) => {
  const [services, setServices] = useState<Service[]>()
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const fetchServices = async () => {
      const res = await axiosPrivate.get('/services/expert/6')
      
      setServices(res.data)
    }

    try {
      fetchServices()
    } catch (error) {
      console.log("Error from component", error)
    }

    return () => {}
  }, [])

  return <div className='flex flex-col px-8 py-6 justify-center'>
    <ul>
      { services?.length && services.map(s => (
        <li key={s.title}>{s.title}</li>
      ))}
    </ul>
  </div>
}

export default ExploreServices