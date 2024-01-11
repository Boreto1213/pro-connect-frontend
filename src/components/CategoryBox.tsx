import { Dispatch, FC, SetStateAction, useState } from 'react'
import { cn } from '../lib/utils'
import { Category } from '../types/service/category'
import { Tag } from '../types/service/service'

interface CategoryBoxProps {
  category: Tag
  setSelectedCategories: Dispatch<SetStateAction<Tag[]>>
}

const CategoryBox: FC<CategoryBoxProps> = ({
  category,
  setSelectedCategories,
}) => {
  const [checked, setChecked] = useState<boolean>(false)

  const onClick = () => {
    setChecked((prev) => !prev)
    setSelectedCategories((prev) => {
      if (prev.find((c) => c.id === category.id)) {
        return prev.filter((c) => c.id !== category.id)
      }
      return [...prev, category]
    })
  }
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
      {category.text}
    </div>
  )
}

export default CategoryBox
