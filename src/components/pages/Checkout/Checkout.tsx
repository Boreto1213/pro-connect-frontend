import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import { FC, useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/api/useAxiosPrivate'

const secretStripeKey =
  'sk_test_51OX23MDTKpEYN8MYMFuWee9a09FB7N6iCogwvqbQyVQnOrBt7oyMSEjRpCs9tdL7V92YFLhjPEu6QgI9i41q9rFL003cZbWVSP'
const publishableStripeKey =
  'pk_test_51OX23MDTKpEYN8MYuVCCpJUM2N4fhDVdvhWB7ia1KzgP7Os4bTzj4RC23yI9Rdob72FDHY0DSTHTOics0zst2Fci00YxFXhWA4'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(publishableStripeKey)

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = ({}) => {
  const [clientSecret, setClientSecret] = useState<{clientSecret: string}>()
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    axiosPrivate
      .post('/payments/create-checkout-session')
      .then((res) => res.data)
      .then((data) => setClientSecret(data))
  }, [])

  return (
    <div id='checkout' className='pt-[80px] z-20 flex-grow'>
      {clientSecret && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={clientSecret}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

export default Checkout
