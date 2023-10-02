import { FC } from 'react'
import donaldTrump from '../../../assets/trump-circle.png'
import { Icons } from '../../Icons'
import Tag from '../../ui/Tag'

interface ServiceCardSMProps {}

const ServiceCardSM: FC<ServiceCardSMProps> = ({}) => {
  return (
    <div className='w-full max-w-lg bg-gray-50 px-6 py-4 rounded-lg shadow-md transition-all hover:brightness-95 cursor-pointer'>
      <div className='flex justify-between items-center'>
        <div className='flex start-center items-center gap-2'>
          <img
            src={donaldTrump}
            alt='Your profile picture'
            className='w-11 h-11'
          />
          <div className='flex flex-col items-start gap-0'>
            <p className='text-lg font-semibold text-slate-700'>Donald Pump</p>
            <p className='text-xs font-semibold text-teal-400'>
              Proffecional dictator
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <div className='flex flex-col justify-start items-start'>
            <span className='flex justify-center items-center gap-1 text-sm text-semibold text-gray-400'>
              <Icons.Star className='w-4 h-4 text-gray-400' /> 1,233 reviews
            </span>
            <span className='flex justify-center items-center gap-1 text-sm text-semibold text-gray-400'>
              <Icons.User className='w-4 h-4 text-gray-400' />
              3,543 users
            </span>
          </div>

          <span className='flex justify-center items p-2 bg-gray-400 text-white text-lg font-semibold rounded-md'>
            8.8
          </span>
        </div>
      </div>
      <h3 className='mt-4'>
        Online consulations on how to conquer the world with a proffecional
        dictator.
      </h3>
      <div className='flex justify-between w-full mt-4'>
        <div className='flex items-end w-full gap-1'>
          <Tag>politics</Tag>
          <Tag>online</Tag>
        </div>
        <span className='text-3xl font-bold text-teal-400'>45€</span>
      </div>
    </div>
  )
}

export default ServiceCardSM
