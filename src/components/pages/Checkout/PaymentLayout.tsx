import { FC } from 'react'
import { Icons } from '../../Icons'
import { Outlet } from 'react-router-dom'

interface PaymentLayoutProps {
  
}

const PaymentLayout: FC<PaymentLayoutProps> = ({}) => {
  return <div className='flex justify-center items-center w-full h-screen overflow-hidden relative px-16 2xl:gap-[400px]'>
  <div className='absolute top-5 left-8 z-10 flex justify-center items-center gap-2'>
    <Icons.Logo />
    <h1 className='text-4xl font-semibold text-teal-500'>
      Pro<span className='text-slate-500'>Connect</span>
    </h1>
  </div>

  <Outlet />
</div>
}

export default PaymentLayout