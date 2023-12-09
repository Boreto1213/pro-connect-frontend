import { Input } from '@nextui-org/react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import Button from '../../ui/Button'
import StarRating from './StarRating'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CreateReviewRequest, Review, Star } from '../../../types/review'
import { useReviewAPI } from '../../../hooks/api/useReviewAPI'
import useAuth from '../../../hooks/useAuth'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'
import { toast } from 'sonner'

const schema = z.object({
  review: z
    .string()
    .min(1, { message: 'Required' })
    .max(500, { message: 'Max length is 500 characters' }),
})

type FormData = z.infer<typeof schema>

interface AddReviewFormProps {
  setReviews: Dispatch<SetStateAction<Review[]>>
}

const AddReviewForm: FC<AddReviewFormProps> = ({ setReviews }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })
  const [stars, setStars] = useState<Star[]>([
    { checked: true, id: 1 },
    { checked: false, id: 2 },
    { checked: false, id: 3 },
    { checked: false, id: 4 },
    { checked: false, id: 5 },
  ])
  const { createReview } = useReviewAPI()
  const {
    auth: { id },
  } = useAuth()
  const getQueryParam = useGetQueryParam()
  const serviceId = getQueryParam('selectedServiceId')

  const onSubmit = (data: FormData) => {
    const rating = stars.reduce((acc, cur) => (cur.checked ? acc + 1 : acc), 0)
    const request: CreateReviewRequest = {
      createdAt: new Date(),
      clientId: id,
      serviceId: Number(serviceId),
      rating: rating,
      text: data.review.trim(),
    }
    // const optimisticReviewUpdate: Review = {
    //   id: 0,
    //   createdBy: 
    //   createdAt: new Date()
    // }

    createReview(request)
      .then((_) => {
        reset()
        toast.success('Review created successfully.')
      })
      .catch((_) => toast.error('Something went wrong.'))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-2 bg-gray-50 px-4 py-2 rounded-md'
    >
      <Input {...register('review')} placeholder='Leave a review...' />
      {errors.review && (
        <p className='text-sm text-rose-500'>{errors.review.message}</p>
      )}
      <div className='flex justify-between w-full'>
        <StarRating stars={stars} setStars={setStars} />
        <Button type='submit' variant='slate'>
          Post
        </Button>
      </div>
    </form>
  )
}

export default AddReviewForm
