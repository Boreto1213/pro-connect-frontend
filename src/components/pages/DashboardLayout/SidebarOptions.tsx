import { FC } from 'react'
import { SideBarOption } from '../../../types/sidebar-option'
import { Icons } from '../../Icons'
import { Link } from 'react-router-dom'

interface SidebarOptionsProps {
  sidebarOptions: SideBarOption[]
}

const SidebarOptions: FC<SidebarOptionsProps> = ({ sidebarOptions }) => {
  return (
    <div className='absolute flex flex-col items-center h-full w-[116px] hover:w-[280px] transition-all duration-700 border-r-1 bg-white border-gray-200 px-6 pt-10 group'>
      <div className='sticky top-36 flex flex-col items-center w-full'>
        {sidebarOptions.length > 0 ? (
          sidebarOptions.map((option) => {
            const Icon = Icons[option.icon]
            return (
              <Link
                className='w-full cursor-pointer'
                key={option.id}
                to={option.href}
              >
                <div className='flex justify-start items-center w-full h-14 gap-2 px-4 py-2 hover:bg-gray-50 transition-all duration-500 rounded-md group/sidebar-option'>
                  <div className='flex justify-start items-center p-1 rounded-md'>
                    <Icon className='w-8 h-8 text-gray-700 transition-all duration-500 group-hover/sidebar-option:text-teal-500' />
                  </div>
                  <h4 className='text-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-1500 text-gray-700 group-hover/sidebar-option:text-teal-500'>
                    {option.name}
                  </h4>
                </div>
              </Link>
            )
          })
        ) : (
          <p>No side bar options :(</p>
        )}
      </div>
    </div>
  )
}

export default SidebarOptions
