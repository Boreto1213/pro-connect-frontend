import { FC } from 'react'
import Button from '../../ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/
    ),
})

type FormData = z.infer<typeof schema>

const LoginForm: FC = ({}) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    navigate('/dashboard/home')
  }

  return (
    <div className='w-full max-w-md z-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <h4 className='w-full flex justify-center text-xl font-semibold my-3'>
          Sign in with credentials:
        </h4>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email:
          </label>
          <input
            {...register('email')}
            type='text'
            name='email'
            placeholder='Email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.email && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Please enter a valid email.
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password:
          </label>
          <input
            {...register('password')}
            name='password'
            type='password'
            placeholder='*************'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.email && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Password must contain at least 1 lowercase, 1 uppercase, 1 number,
              1 symbol and be at least 8 characters long.
            </p>
          )}
        </div>

        <div className='flex justify-between'>
          <Button type='submit'>Sign in</Button>
          <Link to='/auth/register'>
            <Button variant='ghost' className='ml-2'>
              Don't have an account?
            </Button>
          </Link>
        </div>
      </form>

      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h4 className='w-full flex justify-center text-xl font-semibold my-3'>
          Sign in with:
        </h4>
        <Button variant='slate' size='lg' className='w-full'>
          <svg
            width='30px'
            height='30px'
            viewBox='0 0 14 14'
            role='img'
            focusable='false'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#4285f4'
              d='M12.87999908 7.13331113c0-.49332777-.0400763-.85332837-.12666018-1.22665645H7.12000332v2.22664117h3.30664127c-.066603.55335156-.42664081 1.38668711-1.22665655 1.94665632l-.01121182.07452283 1.781156 1.37983931.12340638.01230915c1.13330234-1.04664784 1.78666048-2.5866559 1.78666048-4.41331233'
            />
            <path
              fill='#34a853'
              d='M7.1199995 12.99998274c1.61997706 0 2.97996124-.53335826 3.9733286-1.45332779l-1.89334397-1.46670278c-.506656.35333936-1.18667175.59999942-2.07998463.59999942-1.58665638 0-2.9333128-1.04663353-3.41335881-2.49329787l-.07036253.0059747-1.85207197 1.43333564-.02421753.06736635c.98665649 1.95998474 3.01332819 3.30668669 5.36001523 3.30668669'
            />
            <path
              fill='#fbbc05'
              d='M3.70664069 8.18665467c-.1266641-.37332817-.19996928-.7733588-.19996928-1.18667175 0-.41335838.07330146-.81334368.19330516-1.18667175l-.00335496-.07951328-1.87528168-1.45636157-.0613549.0291889c-.40664846.81334368-.63998411 1.7266948-.63998411 2.69335884 0 .96666415.23333565 1.87996937.63998507 2.69331295l1.94665651-1.5066412'
            />
            <path
              fill='#eb4335'
              d='M7.1199995 3.31996768c1.12664872 0 1.88663348.48666365 2.31998468.89335887l1.69332861-1.65334353C10.0933434 1.59331888 8.73997656.9999829 7.1199995.9999829c-2.34668704 0-4.37335884 1.34665643-5.36001523 3.30664108l1.9399924 1.5066871c.48670993-1.44666397 1.83336635-2.4933434 3.42002274-2.4933434'
            />
          </svg>
          Google
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
