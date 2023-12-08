import { Input } from '@nextui-org/react'
import { FC, useRef, useState } from 'react'
import { Icons } from '../../Icons'
import CategoryBox from '../../CategoryBox'
import { Category } from '../../../types/service/category'
import { useServiceAPI } from '../../../hooks/api/useServiceAPI'
import { useServices } from '../../../hooks/useServices'

interface ServiceFilterProps {}

const ServiceFilter: FC<ServiceFilterProps> = ({}) => {
  const { data, setData } = useServices()
  const { getServicesFilterCriteriaAndPage } = useServiceAPI()
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const titleInputRef = useRef<HTMLInputElement>(null)
  const minPriceInputRef = useRef<HTMLInputElement>(null)
  const maxPriceInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    { text: 'Gym', id: 0 },
    { text: 'healthcare', id: 1 },
    { text: 'yoga', id: 2 },
    { text: 'sport', id: 3 },
    { text: 'computer science', id: 4 },
    { text: 'programming', id: 5 },
    { text: 'IT', id: 6 },
    { text: 'interior design', id: 7 },
    { text: 'web design', id: 8 },
    { text: 'design', id: 9 },
    { text: 'international law', id: 10 },
    { text: 'politics', id: 11 },
    { text: 'travel', id: 12 },
    { text: 'gardening', id: 13 },
    { text: 'cyber security', id: 14 },
    { text: 'plumbing', id: 15 },
    { text: 'electrician', id: 16 },
    { text: 'mentorship', id: 17 },
    { text: 'skill enhancement', id: 18 },
    { text: 'professional advice', id: 19 },
    { text: 'marketing', id: 20 },
    { text: 'education', id: 21 },
    { text: 'real estate', id: 22 },
    { text: 'remote', id: 23 },
    { text: 'online', id: 24 },
    { text: 'service', id: 25 },
    { text: 'blockchain', id: 26 },
    { text: 'AI', id: 27 },
    { text: 'manufacturing', id: 28 },
    { text: 'science', id: 29 },
    { text: 'finances', id: 30 },
    { text: 'entrepreneurship', id: 31 },
    { text: 'business', id: 32 },
  ]

  const onChange = () => {
    getServicesFilterCriteriaAndPage(
      data.page,
      titleInputRef.current!.value,
      Number(minPriceInputRef.current!.value),
      Number(maxPriceInputRef.current!.value || 1000000000)
    ).then((res) => {
      setData((prev) => ({
      ...prev,
      services: res.data.services,
      totalPages: res.data.totalPages,
      filters: {
          titleQuery: titleInputRef.current!.value,
          minPrice: Number(minPriceInputRef.current!.value),
          maxPrice: Number(maxPriceInputRef.current!.value || 1000000000),
        },
      }))
    })
  }

  return (
    <div className='flex flex-col sticky top-28 gap-3 col-span-3 h-full px-8'>
      <h3 className='w-full mb-3 text-center text-xl text-semibold text-gray-700'>
        Filters
      </h3>
      <Input
        type='text'
        placeholder='Search for services...'
        labelPlacement='outside'
        ref={titleInputRef}
        onChange={onChange}
        endContent={
          <Icons.Search className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
        }
      />
      <h5 className='text-md text-semibold text-gray-700'>Price range:</h5>
      <div className='flex gap-3'>
        <Input
          type='number'
          placeholder='Min.'
          labelPlacement='outside'
          ref={minPriceInputRef}
          onChange={onChange}
          endContent={
            <Icons.DollarSign className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
          }
        />
        <Input
          type='number'
          placeholder='Max.'
          labelPlacement='outside'
          ref={maxPriceInputRef}
          onChange={onChange}
          max={999999999}
          endContent={
            <Icons.DollarSign className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
          }
        />
      </div>

      <h5 className='text-md text-semibold text-gray-700'>Categories:</h5>
      <div className='flex flex-wrap gap-1'>
        {categories.length &&
          categories.map((c, i) => (
            <CategoryBox
              key={i}
              category={c}
              setSelectedCategories={setSelectedCategories}
            />
          ))}
      </div>
    </div>
  )
}

export default ServiceFilter
