import { CreateReviewRequest, Review } from '../../types/review'
import useAxiosPrivate from './useAxiosPrivate'

export const useReviewAPI = () => {
  const axiosPrivate = useAxiosPrivate()
  const path = '/reviews'

  const createReview = (req: CreateReviewRequest) => {
    return axiosPrivate.post(path, req)
  }

  const getAllReviewsByServiceId = (serviceId: number) => {
    return axiosPrivate.get<Review[]>(`${path}/service/${serviceId}`)
  }

  return { createReview, getAllReviewsByServiceId }
}
