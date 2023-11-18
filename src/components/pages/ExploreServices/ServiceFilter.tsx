import { Input } from '@nextui-org/react'
import { FC } from 'react'
import { Icons } from '../../Icons'
import CategoryBox from './CategoryBox';

interface ServiceFilterProps {
  
}

const ServiceFilter: FC<ServiceFilterProps> = ({}) => {
  const categories = [
    "Gym", 
    "healthcare", 
    "yoga", 
    "sport", 
    "computer science", 
    "programming", 
    "IT", 
    "interior design", 
    "web design", 
    "design", 
    "international law", 
    "politics", 
    "travel", 
    "gardening", 
    "cyber security", 
    "plumbing", 
    "electrician", 
    "mentorship", 
    "skill enhancement", 
    "professional advice", 
    "marketing", 
    "education", 
    "real estate", 
    "remote", 
    "online", 
    "service", 
    "blockchain", 
    "AI", 
    "manufacturing", 
    "science", 
    "finances", 
    "entrepreneurship", 
    "business"
  ];
  
  return <div className='flex flex-col sticky top-28 gap-3 col-span-3 h-full px-8'>
  <h3 className='w-full mb-3 text-center text-xl text-semibold text-gray-700'>Filters</h3>
  <Input
    type='text'
    placeholder='Search for services...'
    labelPlacement='outside'
    endContent={
      <Icons.Search className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
    }
  />
  <h5 className='text-md text-semibold text-gray-700'>Price range:</h5>
  <div className="flex gap-3">
  <Input
    type='number'
    placeholder='Min.'
    labelPlacement='outside'
    endContent={
      <Icons.DollarSign className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
    }
  />
  <Input
    type='number'
    placeholder='Max.'
    labelPlacement='outside'
    endContent={
      <Icons.DollarSign className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
    }
  />
  </div>

  <h5 className='text-md text-semibold text-gray-700'>Categories:</h5>
  <div className="flex flex-wrap gap-1">
    {categories.length && categories.map((c, i) => (
      <CategoryBox key={i} category={c} />
    ))}
  </div>
</div>
}

export default ServiceFilter