import { FC, useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader } from '../../ui/Dialog'
import { Icons } from '../../Icons'
import Button from '../../ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'
import { Service } from '../../../types/service/service'
import { useServiceAPI } from '../../../hooks/api/useServiceAPI'
import donaldPump from '../../../assets/trump-circle.png'
import { toast } from 'sonner'
import ReviewContainer from './ReviewContainer'
import { isNumerical } from '../../../lib/utils'


interface ServiceDetailsPopupProps {}

const ServiceDetailsPopup: FC<ServiceDetailsPopupProps> = ({}) => {
  const getQueryParam = useGetQueryParam()
  const isOpen = getQueryParam('popupOpen') === 'true' ? true : false
  const seeReviews = getQueryParam('seeReviews') === 'true' ? true : false
  const selectedServiceId = getQueryParam('selectedServiceId')
  const currentPage = Number(getQueryParam('page')) || 1
  const [selectedService, setSelectedService] = useState<Service | undefined>()
  const { getServiceById } = useServiceAPI()
  const navigate = useNavigate()


  useEffect(() => {
    // check if service id is present and is a number
    if (selectedServiceId && isNumerical(selectedServiceId)) {
      getServiceById(Number(selectedServiceId))
        .then((res) => {
          setSelectedService(res.data)
        })
        .catch((_) => {
          toast.error('Something went wrong.')
        })
    }
  }, [selectedServiceId])

  const onClose = () =>
    navigate(
      `/dashboard/services?page=${currentPage}&popupOpen=false&seeReviews=false&selectedServiceId=`
    )

  const onBuy = () => {
    navigate(
      `/payment/checkout`
    )
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent onClose={onClose}>
        <DialogHeader>
          <div className='flex start-center items-center gap-2'>
            <img
              src={donaldPump}
              alt='Your profile picture'
              className='w-14 h-14'
            />
            <div className='flex flex-col items-start gap-0'>
              <p className='text-xl font-semibold text-slate-700'>
                {selectedService?.expert.firstName +
                  ' ' +
                  selectedService?.expert.lastName}
              </p>
              <p className='text-base font-semibold text-teal-400'>
                {selectedService?.expert.profession}
              </p>
            </div>
          </div>
          <h3 className='text-xl font-semibold text-gray-700 my-5'>
            {selectedService?.title}
          </h3>
          <span>{selectedService?.description}</span>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col justify-start items-start mt-5'>
              <span className='flex justify-center items-center gap-1 text-base text-semibold text-gray-500'>
                <Icons.Star className='w-5 h-5 text-yellow-400' /> 1,233 reviews
              </span>
              <span className='flex justify-center items-center gap-1 text-base text-semibold text-gray-500'>
                <Icons.User className='w-5 h-5 text-gray-600' />
                3,543 clients
              </span>
              <span className='flex justify-center items-center gap-1 text-base text-semibold text-gray-500'>
                <Icons.PartyPopper className='w-5 h-5 text-teal-400' />
                8.8 score
              </span>
            </div>
            <Button onClick={onBuy}>
              Buy for{' '}
              <span className='ml-1 text-lg font-semibold'>
                {selectedService?.price}€
              </span>
            </Button>
          </div>
          <div className='flex justify-center text-teal-500 font-semibold underline'>
            <Link
              to={`/dashboard/services?page=${currentPage}&popupOpen=true&seeReviews=${!seeReviews}&selectedServiceId=${selectedServiceId}`}
            >
              {seeReviews ? 'Hide' : 'See'} reviews
            </Link>
          </div>
          {seeReviews && (
            <ReviewContainer />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ServiceDetailsPopup
