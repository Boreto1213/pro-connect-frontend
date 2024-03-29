import { FC } from 'react'
import suitDude from '../../../assets/suit-dude.jpeg'
import { Icons } from '../../Icons'

interface ExpertCardSMProps {
  name: string
  profession: string
  image?: string
  yearsOfExperience: number
  clients: number
  rating: number
}

const ExpertCardSM: FC<ExpertCardSMProps> = ({name, profession, image, yearsOfExperience, rating, clients}) => {
  return (
    <div className='flex flex-col items-center w-full max-w-xs bg-gray-50 px-5 py-3 rounded-lg shadow-md transition-all hover:brightness-95 cursor-pointer'>
      <img
        src={image || suitDude}
        alt='X-user profile picture'
        className=' h-[250px] w-full object-cover rounded-md'
      />
      <div className='flex flex-col w-full mt-3'>
        <p className='text-xl font-semibold text-slate-700'>{ name }</p>
        <p className='text-md font-semibold text-teal-400'>
          { profession }
        </p>
      </div>
      <div className='flex flex-col items-start w-full mt-3'>
      <span className='flex justify-center items-center gap-1 text-sm text-semibold text-gray-400'>
          <Icons.ShieldCheck className='w-4 h-4 text-gray-400' />
          {yearsOfExperience} years of experience
        </span>
        <span className='flex justify-center items-center gap-1 text-sm text-semibold text-gray-400'>
          <Icons.User className='w-4 h-4 text-gray-400' />
          { clients } clients
        </span>
        <span className='flex justify-center items-center gap-1 text-sm text-semibold text-teal-400'>
          <Icons.ThumbsUp className='w-4 h- text-teal-400' />
          { rating }%
        </span>
      </div>
    </div>
  )
}

export default ExpertCardSM
