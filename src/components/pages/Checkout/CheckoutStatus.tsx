import { FC, useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/api/useAxiosPrivate'
import { toast } from 'sonner'
import { Navigate, useNavigate } from 'react-router-dom'
import { Icons } from '../../Icons'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'
import useAuth from '../../../hooks/useAuth'

interface CheckoutStatusProps {}

const CheckoutStatus: FC<CheckoutStatusProps> = ({}) => {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState('')
  const axiosPrivate = useAxiosPrivate()
  const getQueryParam = useGetQueryParam()
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  useEffect(() => {
    let intervalId
    const sessionId = getQueryParam('session_id')
    axiosPrivate
      .get(`/payments/session-status?session_id=${sessionId}`)
      .then((res) => res.data)
      .then((data) => {
        setAuth({
          accessToken: '',
          refreshToken: '',
          firstName: data.first_name,
          lastName: data.last_name,
          profileImageUrl: data.profile_pic_url,
          id: Number(data.user_id),
          role: data.user_role,
        })
        setStatus(data.status)
        setCustomerEmail(data.customer_email)
        intervalId = setTimeout(() => {
          console.log('NAVIGATED SUCCESSFULLY!')

          navigate('/dashboard/home')
        }, 5000)
      })
      .catch((err) => {
        console.log(err)
        toast.error('Something went wrong getting checkout status.')
      })
  }, [])

  if (status === 'open') {
    return <Navigate to='/checkout' />
  }

  if (status === 'complete') {
    return (
      <section id='success' className='flex flex-col justify-center space-y-2'>
        <div className='flex justify-between items-center'>
          <h1 className='text-5xl font-semibold'>Payment successful!</h1>
          <Icons.Success className='w-36 h-36' />
        </div>
        <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}. If you have any questions, please email{' '}
          <a href='mailto:orders@example.com'>orders@example.com</a>.
        </p>
        <p className='text-gray-700 font-sm'>You will be redirected shortly.</p>
      </section>
    )
  }

  return <div>CheckoutStatus</div>
}

export default CheckoutStatus
