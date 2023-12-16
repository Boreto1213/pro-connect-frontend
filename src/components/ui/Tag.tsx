import { FC, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

const Tag: FC<TagProps> = ({children}) => {
  return <div className='flex justify-center items-center max-w-md text-xs font-bold h-5 text-teal-700 rounded-xl border-1.5 bg-white border-teal-300  px-2'>#{children}</div>
}

export default Tag