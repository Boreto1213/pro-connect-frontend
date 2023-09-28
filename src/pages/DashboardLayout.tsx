import { FC } from 'react'
import { Icons } from '../components/Icons'
import { SideBarOption } from '../types/sidebar-options'
import SidebarOptions from '../components/SidebarOptions'


const DashboardLayout: FC = () => {
  const sidebarOptions: SideBarOption[] = [
    {id: 1, name: 'Home', href: '/', icon: 'Home'},
    {id: 4, name: 'Chats', href: '/chats', icon: 'MessageCircle'},
    {id: 2, name: 'Explore servies', href: '/services', icon: 'Lightbulb'},
    {id: 3, name: 'Explore experts', href: '/experts', icon: 'Users'},
    {id: 5, name: 'Create new service', href: '/services/create', icon: 'PackagePlus'},
    {id: 6, name: 'Statistics', href: '/statistics', icon: 'BarChart4'},
    {id: 7, name: 'About', href: '/about', icon: 'HelpCircle'},
  ]
  return (
    <>
      <div className='flex justify-between items-center w-screen h-[100px] px-8 border-b-1 border-gray-200'>
        <div className='flex justify-center items-center gap-2'>
        <Icons.Logo />
        <h1 className='text-4xl font-semibold text-teal-500'>
          Pro<span className='text-slate-500'>Connect</span>
        </h1>
        </div>
      </div>
      <div className='relative h-[calc(100vh-100px)]'>
        <SidebarOptions sidebarOptions={sidebarOptions} />
        <div className='inline-flex h-full w-full  pl-[320px]'>
          <div id='dashboard-content' className='w-full h-full bg-gray-50 flex justify-center items-center text-4xl text-slate-800'>
            Content
          </div>
        </div>
      </div>
    </>
  )
}
export default DashboardLayout