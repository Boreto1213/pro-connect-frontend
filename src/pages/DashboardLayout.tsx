import { FC } from 'react'
import { SideBarOption } from '../types/sidebar-option'
import SidebarOptions from '../components/SidebarOptions'
import TopBar from '../components/TopBar'
import { AppDataBanner } from '../types/app-data-banner'
import DataBanners from '../components/DataBanners'
import ServiceCardSM from '../components/ServiceCardSM'

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
  const bannerData: AppDataBanner[] = [
    { word: 'members', number: '39k+', href: '/example', bgColor: 'teal' },
    { word: 'experts', number: '5k+', href: '/example', bgColor: 'teal' },
    { word: 'services', number: '10k+', href: '/example', bgColor: 'slate' },
    { word: 'reviews', number: '200k', href: '/example', bgColor: 'gray' },
  ]

  return (
    <>
      <TopBar />
      <div className='relative'>
        <SidebarOptions sidebarOptions={sidebarOptions} />
        <div className='inline-flex flex-col h-full w-full pl-[320px] pr-20 pb-20'>
          <div
            id='dashboard-content'
            className='w-full h-full flex flex-col justify-start gap-16 mt-10'
          >
            <div className='flex flex-col gap-10'>
              <h1 className='text-8xl text-slate-700  welcome-heading whitespace-nowrap'>
                Unlock the Potential of{' '}
                <div className='flex'>
                  <span className='heading-stroke whitespace-nowrap transition-colors hover:text-teal-700'>
                    Collective Wisdom{' '}
                  </span>
                  <span>...</span>
                </div>
              </h1>
              <DataBanners data={bannerData} />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className='text-3xl text-slate-700'>Popular services</h2>
              </div>
              <div className='flex gap-5 mt-10'>
                <ServiceCardSM />
                <ServiceCardSM />
                <ServiceCardSM />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DashboardLayout
