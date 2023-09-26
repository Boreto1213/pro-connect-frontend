import { FC } from 'react'
import globalNetwork from '../assets/global-network.png'
import Button from '../components/Button'

const Login: FC = () => {
  return (
    <div className='flex justify-end items-center w-full h-screen bg-slate-700 overflow-hidden relative px-16 gap-[400px]'>
      <div className='absolute top-6 left-6 z-10 flex justify-center items-center gap-2'>
        <svg
          height='60px'
          width='60px'
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 59 59'
          xmlSpace='preserve'
          fill='#000000'
        >
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <g>
              {' '}
              <g>
                {' '}
                <path
                  style={{ fill: '#14b8a5' }}
                  d='M13,16.81c0-2.104,1.706-3.81,3.81-3.81H47V4.81C47,2.706,45.294,1,43.19,1H4.81 C2.706,1,1,2.706,1,4.81v38.38C1,45.294,2.706,47,4.81,47H13V16.81z'
                ></path>{' '}
                <path
                  style={{ fill: '#26B99A' }}
                  d='M14,48H4.81C2.157,48,0,45.842,0,43.19V4.81C0,2.158,2.157,0,4.81,0H43.19 C45.843,0,48,2.158,48,4.81V14H16.81C15.261,14,14,15.261,14,16.81V48z M4.81,2C3.261,2,2,3.261,2,4.81v38.38 C2,44.739,3.261,46,4.81,46H12V16.81c0-2.652,2.157-4.81,4.81-4.81H46V4.81C46,3.261,44.739,2,43.19,2H4.81z'
                ></path>{' '}
              </g>{' '}
              <path
                style={{ fill: '#64748b' }}
                d='M55.19,59H16.81C14.706,59,13,57.294,13,55.19V16.81c0-2.104,1.706-3.81,3.81-3.81h38.38 c2.104,0,3.81,1.706,3.81,3.81v38.38C59,57.294,57.294,59,55.19,59z'
              ></path>{' '}
            </g>{' '}
          </g>
        </svg>
        <h1 className='text-4xl font-semibold text-teal-500'>
          Pro<span className='text-slate-500'>Connect</span>
        </h1>
      </div>
      <div className='flex justify-center items-center absolute left-[-500px] top-[-500px] h-[1600px] w-[1600px] bg-white rounded-full' />


      <img
        src={globalNetwork}
        className='h-[500px] w-[500px] z-10 logo'
        alt='global network'
      />


      <div className='w-full max-w-md'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10'>
          <h4 className='w-full flex justify-center text-xl font-semibold my-3'>
            Sign in to your account:
          </h4>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Email:
            </label>
            <input
              type='text'
              name='email'
              placeholder='Email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Password:
            </label>
            <input
              type='password'
              name='password'
              placeholder='*************'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          <Button type='submit'>Sign in</Button>
          <Button variant='ghost' className='ml-2'>Don't have un account?</Button>
        </form>
      </div>
    </div>
  )
}

export default Login