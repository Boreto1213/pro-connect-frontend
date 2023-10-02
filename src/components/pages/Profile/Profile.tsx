import { FC } from 'react'
import donaldTrump from '../../../assets/trump-circle.png'
import Button from '../../ui/Button'
import { Tabs, Tab } from '@nextui-org/react'

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <div className='w-full h-screen flex flex-col mt-10'>
      <div className='flex justify-between items-center'>
        <div className='flex items-end gap-2'>
          <img
            src={donaldTrump}
            alt='X-user profile picture'
            className='w-40 h-40 rounded-full'
          />
          <div className='flex flex-col w-full mb-3'>
            <p className='text-3xl font-semibold text-slate-700'>
              Jimmy Italiano
            </p>
            <p className='text-xl font-semibold text-teal-400'>Party maker</p>
          </div>
        </div>
        <div className='flex items-end h-full gap-1 mb-5'>
          <Button variant='slate'>Edit profile</Button>
          <Button>Add service</Button>
        </div>
      </div>
      <div className="flex">
        <div className="bg-red-300 h-10 w-[50%]"></div>
        <div className="bg-blue-300 h-10 w-[50%]"></div>
      </div>
    </div>
  )
}

export default Profile
