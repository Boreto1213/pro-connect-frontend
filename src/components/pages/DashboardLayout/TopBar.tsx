import { FC } from 'react'
import { Icons } from '../../Icons'
import { Badge, Input, Tooltip } from '@nextui-org/react'
import donaldTrump from '../../../assets/trump-circle.png'

interface TopBarProps {}

const TopBar: FC<TopBarProps> = ({}) => {
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
        <img
          src={donaldTrump}
          alt='Your profile picture'
          className='w-11 h-11'
        />
        <h4 className='text-md font-semibold text-slate-800 whitespace-nowrap'>
          Donald Pump
        </h4>
      </div>
    </div>
  )
}

export default TopBar
