import { FC, useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/api/useAxiosPrivate'
import { toast } from 'sonner'
import { Navigate } from 'react-router-dom'
import { Icons } from '../../Icons'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'

interface CheckoutStatusProps {}

const CheckoutStatus: FC<CheckoutStatusProps> = ({}) => {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState('')
  const axiosPrivate = useAxiosPrivate()
  const getQueryParam = useGetQueryParam()

  useEffect(() => {
    const sessionId = getQueryParam('session_id')
    axiosPrivate
      .get(`/payments/session-status?session_id=${sessionId}`)
      .then((res) => res.data)
      .then((data) => {
        setStatus(data.status)
        setCustomerEmail(data.customer_email)
      }).catch((err) => {
        console.log(err);
        toast.error('Something went wrong getting checkout status.')
      })
  }, [])

  if (status === 'open') {
    return (
      <Navigate to='/checkout' />
    )
  }

  if (status === 'complete') {
    return (
      <section id="success" className='flex flex-col justify-center'>
        <h1 className='text-5xl font-semibold'>Payment successful!</h1>
        <Icons.Success />
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.

          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>

      </section>
    )
  }

  return <div>CheckoutStatus</div>
}

export default CheckoutStatus
