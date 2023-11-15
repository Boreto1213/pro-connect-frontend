import { FC } from 'react'
import donaldTrump from '../../../assets/trump-circle.png'
import { Icons } from '../../Icons'
import Tag from '../../ui/Tag'

interface ServiceCardMDProps {
  service: Service
}

const ServiceCardMD: FC<ServiceCardMDProps> = ({ service }) => {
  return (
    <div className='w-full max-w-3xl bg-gray-50 px-8 py-6 rounded-lg shadow-sm transition-all hover:brightness-95 cursor-pointer'>
      <div className='flex justify-between items-center'>
        <div className='flex start-center items-center gap-2'>
          <img
            src={donaldTrump}
            alt='Your profile picture'
            className='w-14 h-14'
          />
          <div className='flex flex-col items-start gap-0'>
            <p className='text-xl font-semibold text-slate-700'>{ service.expert.firstName + " " + service.expert.lastName }</p>
            <p className='text-base font-semibold text-teal-400'>
              Minister of happiness
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <div className='flex flex-col justify-start items-start'>
            <span className='flex justify-center items-center gap-1 text-base text-semibold text-gray-400'>
              <Icons.Star className='w-5 h-5 text-gray-400' /> 1,233 reviews
            </span>
            <span className='flex justify-center items-center gap-1 text-base text-semibold text-gray-400'>
              <Icons.User className='w-5 h-5 text-gray-400' />
              3,543 clients
            </span>
          </div>

          <span className='flex justify-center items p-2.5 bg-gray-400 text-white text-xl font-semibold rounded-md'>
            8.8
          </span>
        </div>
      </div>
      <h3 className='mt-4 text-lg'>
        { service.title }
      </h3>
      <div className='flex justify-between w-full mt-4'>
        <div className='flex items-end w-full gap-1'>
          <Tag>politics</Tag>
          <Tag>online</Tag>
        </div>
        <span className='text-4xl font-bold text-teal-400'>{service.price}€</span>
      </div>
    </div>
  )
}

export default ServiceCardMD
