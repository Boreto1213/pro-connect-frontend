import { FC } from 'react'
import suitDude from '../../../assets/suit-dude.jpeg'
import { Icons } from '../../Icons'

interface ExpertCardSMProps {}

const ExpertCardSM: FC<ExpertCardSMProps> = ({}) => {
  return (
    <div className='flex flex-col items-center w-full max-w-xs bg-gray-50 px-5 py-3 rounded-lg shadow-md transition-all hover:brightness-95 cursor-pointer'>
      <img
        src={suitDude}
        alt='X-user profile picture'
        className=' h-[250px] w-full object-cover rounded-md'
      />
      <div className='flex flex-col w-full mt-3'>
        <p className='text-xl font-semibold text-slate-700'>Jimmy Italiano</p>
        <p className='text-md font-semibold text-teal-400'>
          Party maker
        </p>
      </div>
      <div className='flex flex-col items-start w-full mt-3'>
      <span className='flex justify-center items-center gap-1 text-sm text-semibold text-gray-400'>
          <Icons.ShieldCheck className='w-4 h-4 text-gray-400' />
          7 years of experience
        </span>
        <span className='flex justify-center items-center gap-1 text-sm text-semibold text-gray-400'>
          <Icons.User className='w-4 h-4 text-gray-400' />
          3,543 clients
        </span>
        <span className='flex justify-center items-center gap-1 text-sm text-semibold text-teal-400'>
          <Icons.ThumbsUp className='w-4 h- text-teal-400' />
          79%
        </span>
      </div>
    </div>
  )
}

export default ExpertCardSM
