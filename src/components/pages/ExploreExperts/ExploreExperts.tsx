import { FC } from 'react'
import ExpertFilter from './ExpertFilter'

interface ExploreExpertsProps {}

const ExploreExperts: FC<ExploreExpertsProps> = ({}) => {
  return (
    <div className='flex justify-center px-8 py-6 bg-emerald-300'>
      <div className='grid grid-cols-10 gap-0 w-full h-10 bg-red-300'>
        <ExpertFilter />
        <div className='col-span-7 h-3 bg-purple-300'>world</div>
      </div>
    </div>
  )
}

export default ExploreExperts
