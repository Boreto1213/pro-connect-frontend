import { FC } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

interface EditProfileProps {}

const schema = z.object({
  firstName: z.string().nonempty().max(50),
  lastName: z.string().nonempty().max(50),
  profession: z.string().nonempty().max(50),
  experience: z.number().min(1).max(50),
  email: z.string().email().max(150),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/
    ),
  phone: z.string().regex(/\+[\d]{1,3}[\d]{9}$/),
  city: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  website: z.string().max(100).optional(),
  photo: z.any().refine((files) => files?.length == 1, 'Image is required.'),
  // .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  // .refine(
  //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   ".jpg, .jpeg, .png and .webp files are accepted."
  // )
  cv: z.any().refine((files) => files?.length == 1, 'Image is required.'),
  bio: z.string().nonempty().max(500),
})

type FormData = z.infer<typeof schema>

const EditProfile: FC<EditProfileProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    fetch('http://localhost:8080/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw new Error('Network response was not ok')
      })
      .then((data) => {
        toast.success('Profile info updated.')
      })
      .catch((error) => {
        toast.error('Something went wrong. Please try again later.')
      })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white w-full px-8 pt-6 pb-8 rounded'
    >
      <h4 className='w-full flex justify-start text-xl font-semibold my-3'>
        Edit profile:
      </h4>
      <div className='flex gap-8 mt-8'>
        <div className='flex flex-col w-full max-w-lg'>
          <div className='mb-4'>
            <label
              htmlFor='firstName'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              First name:
            </label>
            <input
              {...register('firstName')}
              value='Donald'
              type='text'
              name='firstName'
              placeholder='First name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
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
              value='Pump'
              type='text'
              name='lastName'
              placeholder='Last name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid last name.
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='profession'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Profession:
            </label>
            <input
              {...register('profession')}
              value='Professional dictator'
              type='text'
              name='profession'
              placeholder='Profession'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.profession && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid profession.
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='experience'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Years of experience:
            </label>
            <input
              {...register('experience', { valueAsNumber: true })}
              value={3}
              type='text'
              name='experience'
              placeholder='Years of experience'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.experience && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid number.
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
              value='d.pump@gamil.com'
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
              value='123sddasdASD@'
              name='password'
              type='password'
              placeholder='*************'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Password must contain at least 1 lowercase, 1 uppercase, 1
                number, 1 symbol and be at least 8 characters long.
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
              value='+31616022126'
              type='text'
              name='phone'
              placeholder='Phone'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid phone number.
              </p>
            )}
          </div>
        </div>
        <div className='flex flex-col w-full max-w-lg'>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Address:
            </label>
            <input
              {...register('address')}
              value='Kruisakker 60A'
              type='text'
              name='address'
              placeholder='Address'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid addres.
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
              value='Eindhoven'
              type='text'
              name='city'
              placeholder='City'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid city.
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='website'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Website (optional):
            </label>
            <input
              {...register('website')}
              value='www.donaldpump.com'
              type='text'
              name='website'
              placeholder='Website'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid url.
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='photo'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Profile photo:
            </label>
            <input
              {...register('photo')}
              type='file'
              name='photo'
              className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4 file:rounded-md
      file:border-0 file:text-sm file:font-semibold
      file:bg-slate-50 file:text-slate-700
      hover:file:bg-slate-100'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                File is not valid.
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='cv'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              CV:
            </label>
            <input
              {...register('cv')}
              type='file'
              name='cv'
              className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4 file:rounded-md
      file:border-0 file:text-sm file:font-semibold
      file:bg-slate-50 file:text-slate-700
      hover:file:bg-slate-100'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                File is not valid.
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='bio'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Bio:
            </label>
            <textarea
              {...register('bio')}
              value='Greatest description ever.'
              name='bio'
              placeholder='Bio'
              rows={5}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-sm text-red-600 font-medium mt-2'>
                Please enter a valid bio.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-start gap-3 sm:flex-row mt-8'>
        <Button type='submit'>Edit</Button>
        <Link to='/dashboard/profile'>
          <Button variant='slate'>Cancel</Button>
        </Link>
      </div>
    </form>
  )
}

export default EditProfile
