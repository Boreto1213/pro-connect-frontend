import { FC } from 'react'
import { Icons } from '../../Icons'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className='flex justify-evenly items-center h-50px border-t-1 border-gray-200 h-20'>
      <span className='text-gray-300 text-sm font-semibold'>
        © 2023 ProConnect, Inc. All rights reserved.
      </span>
      <div className='flex gap-3'>
        <Icons.Instagram className='w-5 h-5 text-gray-500' />
        <Icons.Facebook className='w-5 h-5 text-gray-500' />
        <Icons.Twitter className='w-5 h-5 text-gray-500' />
        <Icons.Youtube className='w-5 h-5 text-gray-500' />
      </div>
    </div>
  )
}

export default Footer
