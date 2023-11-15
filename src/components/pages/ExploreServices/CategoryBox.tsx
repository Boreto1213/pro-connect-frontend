import { FC, useState } from 'react'
import { cn } from '../../../lib/utils'

interface CategoryBoxProps {
  category: string
}

const CategoryBox: FC<CategoryBoxProps> = ({ category }) => {
  const [checked, setChecked] = useState<boolean>(false)

  const onClick = () => setChecked((prev) => !prev)
  return (
    <div
    onClick={onClick}
      className={cn(
        'px-2 py-1 rounded-md border cursor-pointer border-gray-300 text-base text-gray-700 transition-colors hover:bg-teal-100',
        {
          'bg-teal-200 border-teal-400': checked,
        }
      )}
    >
      {category}
    </div>
  )
}

export default CategoryBox
