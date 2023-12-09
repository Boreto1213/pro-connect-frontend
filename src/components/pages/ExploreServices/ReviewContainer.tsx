import { FC, useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import AddReviewForm from './AddReviewForm'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'
import { Review } from '../../../types/review'
import { useReviewAPI } from '../../../hooks/api/useReviewAPI'
import { isNumerical } from '../../../lib/utils'
import { toast } from 'sonner'

interface ReviewContainerProps {}

const ReviewContainer: FC<ReviewContainerProps> = ({}) => {
  const getQueryParam = useGetQueryParam()
  const serviceId = getQueryParam('selectedServiceId')
  const [reviews, setReviews] = useState<Review[]>([])
  const reviewAPI = useReviewAPI()

  useEffect(() => {
    if (serviceId && isNumerical(serviceId)) {
      reviewAPI
        .getAllReviewsByServiceId(Number(serviceId))
        .then((res) => {
          setReviews(res.data)
        })
        .catch((_) => {
          toast.error('Something went wrong.')
        })
    }
  }, [setReviews, serviceId])

  return (
    <div className='h-[350px w-full'>
      <hr className='text-gray-200 w-full my-4' />
      <div className='flex flex-col gap-1 max-h-[302px] overflow-y-auto'>
        {reviews.length ? (
          reviews.map((r) => <ReviewCard review={r} />)
        ) : (
          <p className='text-lg text-gray-700 font-semibold w-full text-center'>
            No reviews yet. Be the first one. 🙂
          </p>
        )}
      </div>
      <hr className='text-gray-200 w-full my-4' />
      <AddReviewForm setReviews={setReviews} />
    </div>
  )
}

export default ReviewContainer
