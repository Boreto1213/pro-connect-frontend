import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Icons } from '../../Icons'
import { Star } from '../../../types/review'

interface StarRatingProps {
  stars: Star[]
  setStars: Dispatch<SetStateAction<Star[]>>
}



const StarRating: FC<StarRatingProps> = ({stars, setStars}) => {
  const onClick = (index: number) => {
    setStars(
      stars.map((s, i) =>
        i <= index ? { ...s, checked: true } : { ...s, checked: false }
      )
    )
  }

  return (
    <div className='flex items-center'>
      {stars.length &&
        stars.map((s, i) => (
          <button key={s.id} type='button' onClick={() => onClick(i)}>
            <Icons.Star
              className='w-8 h-8 text-yellow-400 transition-colors duration-200'
              fill={s.checked ? '#facc15' : '#fff'}
            />
          </button>
        ))}
    </div>
  )
}

export default StarRating
