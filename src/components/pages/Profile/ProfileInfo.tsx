import { FC, useEffect, useState } from 'react'
import { Icons } from '../../Icons'
import ServiceCardSM from '../Home/ServiceCardSM'
import { useUserDetails } from '../../../hooks/useUserDetails'
import { Service } from '../../../types/service/service'
import { useServiceAPI } from '../../../hooks/api/useServiceAPI'
import { toast } from 'sonner'

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = ({}) => {
  const { user } = useUserDetails()
  const { getServicesByExpertId } = useServiceAPI()
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    if (user) {
      getServicesByExpertId(user.id)
        .then((res) => res.data)
        .then((data) => setServices(data))
        .catch((_) => toast.error('Something went wrong fetching services.'))
    }
  }, [])

  return (
    <>
      <div className='flex flex-col items-start gap-8 w-[50%]'>
        <p className='text-md font-medium '>{user?.bio || 'No bio yet.'}</p>
        <div className='flex flex-col items-start gap-2'>
          <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
            <Icons.ShieldCheck className='w-4 h-4 text-gray-400' />
            {user?.yearsOfExperience} years of experience as {user?.profession}
          </span>
          <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
            <Icons.Mail className='w-4 h- text-gray-400' />
            {user?.email}
          </span>
          <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
            <Icons.User className='w-4 h-4 text-gray-400' />
            3,543 clients
          </span>
          <span className='flex justify-center items-center gap-1 text-lg text-semibold text-teal-400'>
            <Icons.ThumbsUp className='w-4 h- text-teal-400' />
            79% would work again
          </span>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-8 w-[50%]'>
        {services.length ? (
          services.map((s) => (
            <ServiceCardSM
              key={s.id}
              clientsCount={111}
              expertName={s.expert.firstName + ' ' + s.expert.lastName}
              expertProfession={s.expert.profession}
              profileImageUrl={s.expert.profileImageUrl}
              rating={4.4}
              reviewsCount={22}
              serviceTitle={s.title}
              tags={s.tags}
            />
          ))
        ) : (
          <p className='text-xl font-semibold'>No services to show.</p>
        )}
      </div>
    </>
  )
}

export default ProfileInfo
