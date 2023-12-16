import { FC, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Icons } from '../../Icons'
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import { toast } from 'sonner'
import useUserAPI from '../../../hooks/api/useUserAPI'
import useAuth from '../../../hooks/useAuth'
import { AxiosError } from 'axios'
import { useUserDetails } from '../../../hooks/useUserDetails'
import ProfileImage from '../../ui/ProfileImage'

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const { auth: { id } } = useAuth()
  const { user, setUser, updated } = useUserDetails()
  const userService = useUserAPI()
  const navigate = useNavigate()
  

  const onClick = () => {
    userService
      .deleteUserProfile(id)
      .then((_) => {
        toast.success('Profile deleted!')
        // Also logout and erase the auth context
        navigate('/auth/login')
      })
      .catch((error: AxiosError) => {
        if (!error.response) {
          toast.error('No response from server!')
        } else if (error.status === 400) {
          toast.error('User id does not exist!')
        } else if (error.status === 401) {
          toast.error('Unauthorized!')
        } else {
          toast.error('Something went wrong!')
        }
      })
  }

  useEffect(() => {
    userService
      .getUserById(id)
      .then((res) => {
        setUser({
          address: res.data.address,
          bio: res.data.bio,
          city: res.data.city,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phone: res.data.phone,
          email: res.data.email,
          profession: res.data.profession,
          yearsOfExperience: res.data.yearsOfExperience,
          dislikes: res.data.dislikes,
          likes: res.data.likes,
          id: res.data.id,
          profileImageUrl: res.data.profileImageUrl,
          password: res.data.password
        })
      })
      .catch((_) => {
        toast.error('Could not fetch user details.')
      })
  }, [updated])

  return (
    <div className='w-full flex flex-col mt-10'>
      <div className='relative z-10 flex justify-between items-center gradient'>
        <div className='flex items-end gap-2'>
          <ProfileImage size='xxl' imageUrl={user?.profileImageUrl} />
          <div className='inline-flex flex-col w-full mb-3 '>
            <p className='text-3xl font-semibold text-slate-700'>{`${user?.firstName} ${user?.lastName}`}</p>
            <p className='text-xl font-semibold text-teal-400'>
              { user?.profession}
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
