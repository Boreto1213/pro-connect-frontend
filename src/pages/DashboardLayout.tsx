import { FC } from 'react'
import { SideBarOption } from '../types/sidebar-option'
import SidebarOptions from '../components/SidebarOptions'
import TopBar from '../components/TopBar'

const DashboardLayout: FC = () => {
  const sidebarOptions: SideBarOption[] = [
    { id: 1, name: 'Home', href: '/', icon: 'Home' },
    { id: 4, name: 'Chats', href: '/chats', icon: 'MessageCircle' },
    { id: 2, name: 'Explore servies', href: '/services', icon: 'Lightbulb' },
    { id: 3, name: 'Explore experts', href: '/experts', icon: 'Users' },
    {
      id: 5,
      name: 'Create new service',
      href: '/services/create',
      icon: 'PackagePlus',
    },
    { id: 6, name: 'Statistics', href: '/statistics', icon: 'BarChart4' },
    { id: 7, name: 'About', href: '/about', icon: 'HelpCircle' },
  ]
  return (
    <>
      <TopBar />
      <div className='relative h-[calc(100vh-100px)]'>
        <SidebarOptions sidebarOptions={sidebarOptions} />
        <div className='inline-flex h-full w-full  pl-[320px]'>
          <div
            id='dashboard-content'
            className='w-full h-full flex flex-col justify-start text-8xl text-slate-700  mt-10 welcome-heading whitespace-nowrap'
          >
            Unlock the Potential of{' '}
            <div className='flex'>
              <span className='heading-stroke whitespace-nowrap'>
                Collective Wisdom{' '}
              </span>
              <span>...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DashboardLayout

// Welcome to Our Community of Collaborators and
