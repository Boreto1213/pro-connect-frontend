import { FC } from 'react'
import donaldPump from '../../../assets/trump-circle.png'
import { Icons } from '../../Icons'
import { Review } from '../../../types/review'

interface ReviewCardProps {
  review: Review
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const starsCount = 5

  return (
    <div>
      <div className='border border-gray-100 rounded-md px-2 py-1'>
      <div className='flex justify-between'>
        <div className='flex start-center items-center gap-2'>
          <img
            src={donaldPump}
            alt='Your profile picture'
            className='w-7 h-7'
          />
          <div className='flex flex-col items-start gap-0'>
            <p className='text-sm font-bold text-gray-900'>
              {review.createdBy.firstName} {review.createdBy.lastName}
            </p>
          </div>
        </div>
        <div className='flex w-[120px]'>

          {Array.from({ length: starsCount }).map((s, i) => (
            <Icons.Star
              className='w-6 h-6 text-yellow-400'
              fill={i + 1 <= review.rating ? '#facc15' : '#fff'}
            />
          ))}
        </div>
      </div>
      <p className='pl-8 text-sm text-gray-700'>
        { review.text }
      </p>
    <div className='text-end text-xs text-gray-400 font-semibold'>{ review.createdAt.toString().split('T')[0] }</div>
    </div>
    </div>
  )
}

export default ReviewCard
