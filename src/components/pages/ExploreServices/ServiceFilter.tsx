import { Input } from '@nextui-org/react'
import { FC, useEffect, useRef, useState } from 'react'
import { Icons } from '../../Icons'
import CategoryBox from '../../CategoryBox'
import { Category } from '../../../types/service/category'
import { useServiceAPI } from '../../../hooks/api/useServiceAPI'
import { useServices } from '../../../hooks/useServices'
import { Tag } from '../../../types/service/service'
import { toast } from 'sonner'

interface ServiceFilterProps {}

const ServiceFilter: FC<ServiceFilterProps> = ({}) => {
  const { getAllTags } = useServiceAPI()
  const { data, setData } = useServices()
  const { getServicesFilterCriteriaAndPage } = useServiceAPI()
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<Tag[]>([])

  const titleInputRef = useRef<HTMLInputElement>(null)
  const minPriceInputRef = useRef<HTMLInputElement>(null)
  const maxPriceInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    getAllTags()
      .then((res) => {
        setTags(res.data)
      })
      .catch((_) => {
        toast.error('Something went wrong fetching tags.')
      })
  }, [])

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

  // useEffect(() => {
  //   console.log('Categories: ', selectedCategories);
  //   console.log('Services: ', data.services);
  //   console.log('Filtered services: ', data.services.filter((s) => {
  //     s.tags.some((t) => selectedCategories.includes(t))}))
    
    
    
  //   setData((prev) => {
  //     return {
  //       ...prev,
  //       services: selectedCategories.length
  //         ? prev.services.filter((s) => {
  //             s.tags.some((t) => selectedCategories.includes(t))
  //           })
  //         : prev.services,
  //     }
  //   })
  // }, [selectedCategories])

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
        {tags.length &&
          tags.map((c, i) => (
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
