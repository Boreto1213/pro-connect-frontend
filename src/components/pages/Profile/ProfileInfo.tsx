import { FC } from 'react'
import { Icons } from '../../Icons'
import ServiceCardSM from '../Home/ServiceCardSM'
import { useUserDetails } from '../../../hooks/useUserDetails'

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = ({}) => {
  const { user } = useUserDetails()
  return (
    <>
      <div className='flex flex-col items-start gap-8 w-[50%]'>
        <p className='text-md font-medium '>{user?.bio || 'No bio yet.'}</p>
        <div className='flex flex-col items-start gap-2'>
          <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
            <Icons.ShieldCheck className='w-4 h-4 text-gray-400' />
            {user?.yearsOfExperience} years of experience as {user?.profession}
          </span>
          {/* <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
            <Icons.Globe className='w-4 h-4 text-gray-400' />
            www.donaldpump.com
          </span>
          <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
            <Icons.Clipboard className='w-4 h- text-gray-400' />
            CV here
          </span> */}
          <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
            <Icons.Mail className='w-4 h- text-gray-400' />
            { user?.email }
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
        <ServiceCardSM />
        <ServiceCardSM />
        <ServiceCardSM />
        <ServiceCardSM />
        <ServiceCardSM />
      </div>
    </>
  )
}

export default ProfileInfo
