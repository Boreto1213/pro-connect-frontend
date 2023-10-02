import { FC } from 'react'
import { Icons } from '../../Icons'

interface SlideArrowsProps {}

const SlideArrows: FC<SlideArrowsProps> = ({}) => {
  return (
    <div className='flex gap-1 justify-center items-center'>
      <div className='p-0.5 border-2 border-slate-200 rounded-md transition-colors hover:bg-gray-100'>
        <Icons.ChevronLeft className='w-10 h-10 text-gray-400' />
      </div>
      <div className='p-0.5 border-2 border-slate-200 rounded-md transition-colors hover:bg-gray-100'>
        <Icons.ChevronRight className='w-10 h-10 text-gray-400' />
      </div>
    </div>
  )
}

export default SlideArrows
