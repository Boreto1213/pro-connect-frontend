import { FC } from 'react'
import { Icons } from '../../Icons'
import { Badge, Input, Tooltip } from '@nextui-org/react'
import donaldTrump from '../../../assets/trump-circle.png'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

interface TopBarProps {}

const TopBar: FC<TopBarProps> = ({}) => {
  const { auth } = useAuth()

  return (
    <div className='sticky top-0 z-20 flex justify-between items-center w-screen h-[100px] px-8 border-b-1 border-gray-200 bg-white'>
      <div className='flex justify-center items-center gap-2'>
        <Icons.Logo />
        <h1 className='text-4xl font-semibold text-teal-500'>
          Pro<span className='text-slate-500'>Connect</span>
        </h1>
      </div>
      <div className='flex justify-center items-center gap-3 cursor-pointer md:mr-6'>
        <Input
          type='email'
          placeholder='Search for anything...'
          labelPlacement='outside'
          endContent={
            <Icons.Search className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
          }
        />
        <Badge content='99+' shape='circle' color='danger'>
          <div className='p-2 rounded-md hover:bg-gray-50'>
            <Icons.Bell />
          </div>
        </Badge>

        <Tooltip content='Light mode'>
          <div className='p-2 rounded-md hover:bg-gray-50'>
            <Icons.Sun />
          </div>
        </Tooltip>

        <Link to='/dashboard/profile'>
          <div className='flex justify-center items-center gap-2 ml-4'>
            <div className='w-11 h-11 rounded-full overflow-hidden'>
              <img
                src={auth.profileImageUrl}
                alt='Your profile picture'
                className='w-11 h-11 object-cover'
              />
            </div>
            <h4 className='text-md font-semibold text-slate-800 whitespace-nowrap'>
              {`${auth.firstName} ${auth.lastName}`}
            </h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TopBar
