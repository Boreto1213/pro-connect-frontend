import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import globalNetwork from '../assets/global-network.png'
import { Icons } from '../components/Icons'



const AuthLayout: FC = () => {
  return (
    <div className='flex 2xl:justify-end justify-evenly items-center w-full h-screen bg-slate-700 overflow-hidden relative px-16 2xl:gap-[400px]'>
      <div className='absolute top-5 left-8 z-10 flex justify-center items-center gap-2'>
        <Icons.Logo />
        <h1 className='text-4xl font-semibold text-teal-500'>
          Pro<span className='text-slate-500'>Connect</span>
        </h1>
      </div>
      <div className='flex justify-center items-center absolute left-[-500px] top-[-500px] h-[1600px] w-[1600px] bg-white rounded-full shadow-md' />

      <img
        src={globalNetwork}
        className='h-[500px] w-[500px] z-10 logo hidden lg:block'
        alt='global network'
      />

      <Outlet />
    </div>
  )
}

export default AuthLayout
