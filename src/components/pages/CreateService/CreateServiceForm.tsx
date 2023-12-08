import { FC, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import CategoryBox from '../../CategoryBox'
import Button from '../../ui/Button'
import { Category } from '../../../types/service/category'
import { useServiceAPI } from '../../../hooks/api/useServiceAPI'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

const categories = [
  { id: 1, text: 'Gym' },
  { id: 2, text: 'healthcare' },
  { id: 3, text: 'yoga' },
  { id: 4, text: 'sport' },
  { id: 5, text: 'computer science' },
  { id: 6, text: 'programming' },
  { id: 7, text: 'IT' },
  { id: 8, text: 'interior design' },
  { id: 9, text: 'web design' },
  { id: 10, text: 'design' },
  { id: 11, text: 'international law' },
  { id: 12, text: 'politics' },
  { id: 13, text: 'travel' },
  { id: 14, text: 'gardening' },
  { id: 15, text: 'cyber security' },
  { id: 16, text: 'plumbing' },
  { id: 17, text: 'electrician' },
  { id: 18, text: 'mentorship' },
  { id: 19, text: 'skill enhancement' },
  { id: 20, text: 'professional advice' },
  { id: 21, text: 'marketing' },
  { id: 22, text: 'education' },
  { id: 23, text: 'real estate' },
  { id: 24, text: 'remote' },
  { id: 25, text: 'online' },
  { id: 26, text: 'service' },
  { id: 27, text: 'blockchain' },
  { id: 28, text: 'AI' },
  { id: 29, text: 'manufacturing' },
  { id: 30, text: 'science' },
  { id: 31, text: 'finances' },
  { id: 32, text: 'entrepreneurship' },
  { id: 33, text: 'business' },
]

const schema = z.object({
  title: z
    .string()
    .min(1, { message: 'Required' })
    .max(50, { message: 'Max length is 50 characters.' }),
  price: z
    .number({ invalid_type_error: 'Enter a number' })
    .min(0, { message: `Price can't be negative` }),
  description: z
    .string()
    .min(1, { message: 'Required' })
    .max(1000, { message: 'Length must be max 1000 characters' }),
})

type FormData = z.infer<typeof schema>

interface CreateServiceFormProps {}

const CreateServiceForm: FC<CreateServiceFormProps> = ({}) => {
  const {
    auth: { id },
  } = useAuth()
  const serviceAPI = useServiceAPI()
  const navigate = useNavigate()
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    serviceAPI
      .createService({ ...data, tags: selectedCategories, expertId: id })
      .then((_) => {
        toast.success('Service created successfully.')
        navigate('/dashboard/home')
      })
      .catch((error: AxiosError) => {
        if (!error.response) {
          toast.error('No server response.')
        } else if (error.status === 401) {
          toast.error('Unauthorized.')
        } else if (error.status === 400) {
          toast.error('Invalid request payload.')
        } else {
          toast.error('Something went wrong. Please try again.')
        }
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl ml-12 mt-12'>
      <h1 className='text-3xl w-full text-center font-semibold text-gray-700  mb-6'>
        Create a service
      </h1>
      <div className='mb-4'>
        <label
          htmlFor='title'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Title:
        </label>
        <input
          {...register('title')}
          type='text'
          placeholder='Title'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.title && (
          <p className='text-sm text-red-600 font-medium mt-2'>
            {errors.title.message}
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          htmlFor='title'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Price:
        </label>
        <input
          {...register('price', { valueAsNumber: true })}
          type='number'
          step={0.01}
          placeholder='Price'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.price && (
          <p className='text-sm text-red-600 font-medium mt-2'>
            {errors.price.message}
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          htmlFor='title'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Description:
        </label>
        <textarea
          {...register('description')}
          rows={5}
          placeholder='Title'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.description && (
          <p className='text-sm text-red-600 font-medium mt-2'>
            {errors.description.message}
          </p>
        )}
      </div>
      <div className='flex flex-wrap gap-1 mb-6'>
        {categories.length &&
          categories.map((c, i) => (
            <CategoryBox
              key={i}
              category={c}
              setSelectedCategories={setSelectedCategories}
            />
          ))}
      </div>
      <div className='flex items-center justify-start gap-1'>
        <Button type='submit'>Create service</Button>
        <Button type='button' variant='ghost'>
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default CreateServiceForm
