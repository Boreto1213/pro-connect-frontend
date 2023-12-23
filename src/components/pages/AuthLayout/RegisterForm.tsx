import { FC } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import Button from '../../ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { RadioGroup, Radio } from '@nextui-org/radio'
import useAuthAPI from '../../../hooks/api/useAuthAPI'

const schema = z.object({
  isExpert: z
    .string()
    .nonempty()
    .refine((value) => value === 'expert' || value === 'client'),
  firstName: z.string().nonempty().max(50),
  lastName: z.string().nonempty().max(50),
  email: z.string().email().max(150),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/
    ),
  phone: z.string().regex(/\+[\d]{1,3}[\d]{9}$/),
  city: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
})

type FormData = z.infer<typeof schema>

const RegisterForm: FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })
  const authService = useAuthAPI()
  const navigate = useNavigate()

  const onSubmit = (data: FormData) => {
    const formattedData = { ...data, isExpert: data.isExpert === 'expert' }

    authService
      .register(formattedData)
      .then((_) => {
        toast.success('Registration successful.')
        navigate('/auth/login')
      })
      .catch((error) => {
        // Add existing email error message
        console.log(error)

        toast.error('Something went wrong. Please try again.')
      })
  }

  return (
    <div className='w-full max-w-md z-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white shadow-md px-8 pt-6 pb-8 rounded'
      >
        <h4 className='w-full flex justify-center text-xl font-semibold my-3'>
          Register your account:
        </h4>
        <div className='mb-4'>
          <Controller
            name='isExpert'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <RadioGroup
                size='sm'
                color='default'
                label={
                  <p className='text-gray-700 text-sm font-bold'>
                    Select account type:
                  </p>
                }
                orientation='horizontal'
              >
                <Radio
                  {...field}
                  value='client'
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  Client
                </Radio>
                <Radio
                  {...field}
                  value='expert'
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  Expert
                </Radio>
              </RadioGroup>
            )}
          />
          {errors.isExpert && (
            <p className='w-full text-sm text-red-600 font-medium mt-2'>
              Please select on of the fields.
            </p>
          )}
        </div>

        <div className='mb-4'>
          <label
            htmlFor='firstName'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            First name:
          </label>
          <input
            {...register('firstName')}
            type='text'
            name='firstName'
            placeholder='First name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.firstName && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Please enter a valid first name.
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='lastName'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Last name:
          </label>
          <input
            {...register('lastName')}
            type='text'
            name='lastName'
            placeholder='Last name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.lastName && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Please enter a valid last name.
            </p>
          )}
        </div>
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
          {errors.password && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Password must contain at least 1 lowercase, 1 uppercase, 1 number,
              1 symbol and be at least 8 characters long.
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='phone'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Phone number:
          </label>
          <input
            {...register('phone')}
            type='text'
            name='phone'
            placeholder='Phone'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.phone && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Please enter a valid phone number.
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='address'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Address:
          </label>
          <input
            {...register('address')}
            type='text'
            name='address'
            placeholder='Address'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.address && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Please enter a valid address.
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='city'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            City:
          </label>
          <input
            {...register('city')}
            type='text'
            name='city'
            placeholder='City'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.city && (
            <p className='text-sm text-red-600 font-medium mt-2'>
              Please enter a valid city.
            </p>
          )}
        </div>
        <div className='flex justify-between flex-col sm:flex-row'>
          <Button type='submit'>Register</Button>
          <Link to='/auth/login'>
            <Button variant='ghost'>Already have an account?</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
