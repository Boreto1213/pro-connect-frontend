import { FC, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

const Tag: FC<TagProps> = ({children}) => {
  return <div className='flex justify-center items-center max-w-md text-xs font-semibold h-5 text-gray-500 rounded-xl border-1.5 border-teal-300 px-2'>#{children}</div>
}

export default Tag