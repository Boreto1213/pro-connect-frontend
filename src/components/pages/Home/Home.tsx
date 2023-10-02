import { FC } from 'react'
import DataBanners from './DataBanners'
import SlideArrows from './SlideArrows'
import ServiceCardSM from './ServiceCardSM'
import ExpertCardSM from './ExpertCardSM'
import { AppDataBanner } from '../../../types/app-data-banner'

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const bannerData: AppDataBanner[] = [
    { word: 'members', number: '39k+', href: '/example', bgColor: 'teal' },
    { word: 'experts', number: '5k+', href: '/example', bgColor: 'teal' },
    { word: 'services', number: '10k+', href: '/example', bgColor: 'slate' },
    { word: 'reviews', number: '200k', href: '/example', bgColor: 'gray' },
  ]
  return (
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
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl text-slate-700'>Popular services</h2>
          <SlideArrows />
        </div>
        <div className='flex gap-5 mt-10'>
          <ServiceCardSM />
          <ServiceCardSM />
          <ServiceCardSM />
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl text-slate-700'>Popular experts</h2>
          <SlideArrows />
        </div>
        <div className='flex justify-between items-center gap-5 mt-10'>
          <ExpertCardSM />
          <ExpertCardSM />
          <ExpertCardSM />
          <ExpertCardSM />
        </div>
      </div>
    </div>
  )
}

export default Home
