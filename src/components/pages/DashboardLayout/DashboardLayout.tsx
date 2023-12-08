import { FC } from 'react'
import { SideBarOption } from '../../../types/sidebar-option'
import SidebarOptions from './SidebarOptions'
import TopBar from './TopBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const DashboardLayout: FC = () => {
  const sidebarOptions: SideBarOption[] = [
    { id: 1, name: 'Home', href: '/dashboard/home', icon: 'Home' },
    { id: 4, name: 'Chats', href: '/chats', icon: 'MessageCircle' },
    { id: 2, name: 'Explore services', href: '/dashboard/services?page=1&popupOpen=false&seeReviews=false&selectedServiceId=', icon: 'Lightbulb' },
    { id: 3, name: 'Explore experts', href: '/experts', icon: 'Users' },
    {
      id: 5,
      name: 'Create new service',
      href: '/dashboard/services/create',
      icon: 'PackagePlus',
    },
    { id: 6, name: 'Statistics', href: '/statistics', icon: 'BarChart4' },
    { id: 7, name: 'About', href: '/about', icon: 'HelpCircle' },
  ]


  return (
    <>
      <TopBar />
      <div className='relative'>
        <SidebarOptions sidebarOptions={sidebarOptions} />
        <div className='inline-flex flex-col h-full w-full pl-[320px] pr-20 pb-20'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default DashboardLayout
