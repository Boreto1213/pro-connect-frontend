import { FC } from 'react'
import donaldTrump from '../../../assets/trump-circle.png'
import { Link, Outlet } from 'react-router-dom'
import { Icons } from '../../Icons'
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import { toast } from 'sonner'

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const onClick = (userId: string) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if (response.ok) {
        toast.success('Account deleted.')
      } 

      throw new Error('Response was not okay')
    }).catch((error) => {
      toast.error('Something went wrong. Please try again later.')
    })
  }

  return (
    <div className='w-full flex flex-col mt-10'>
      <div className='relative z-10 flex justify-between items-center gradient'>
        <div className='flex items-end gap-2'>
          <img
            src={donaldTrump}
            alt='X-user profile picture'
            className='w-40 h-40 rounded-full'
          />
          <div className='flex flex-col w-full mb-3'>
            <p className='text-3xl font-semibold text-slate-700'>Donald Pump</p>
            <p className='text-xl font-semibold text-teal-400'>
              Professional dictator
            </p>
          </div>
        </div>
        <div className='flex items-end h-full gap-1 mt-10'>
          <Popover placement='left'>
            <PopoverTrigger>
              <Button variant='faded'>
                <Icons.Menu className='w-8 h-8' />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className='flex flex-col py-0.5'>
                <Link
                  to='edit'
                  className='px-2 py-1.5 rounded-md hover:bg-gray-300'
                >
                  Edit profile
                </Link>
                <Link
                  to='example'
                  className='px-2 py-1.5 rounded-md hover:bg-gray-300'
                >
                  Manage services
                </Link>
                <button onClick={onClick}>
                  <span className='flex gap-1 px-2 py-1.5 rounded-md text-rose-500 hover:bg-rose-500 hover:text-white group'>
                    <Icons.Trash2 className='w-4 h-4 text-rose-500 group-hover:text-white' />{' '}
                    Terminate profile
                  </span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className='flex mt-14'>
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
