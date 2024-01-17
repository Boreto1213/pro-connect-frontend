import { FC } from 'react'
import DataBanners from './DataBanners'
import SlideArrows from './SlideArrows'
import ServiceCardSM from './ServiceCardSM'
import ExpertCardSM from './ExpertCardSM'
import { AppDataBanner } from '../../../types/app-data-banner'

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const bannerData: AppDataBanner[] = [
    { word: 'members', number: '39k+', href: '/dashboard/experts', bgColor: 'teal' },
    { word: 'experts', number: '5k+', href: '/dashboard/experts', bgColor: 'teal' },
    { word: 'services', number: '10k+', href: '/dashboard/services', bgColor: 'slate' },
    { word: 'reviews', number: '200k', href: '/dashboard/services', bgColor: 'gray' },
  ]

  const data = [
    {name: 'Boris Damianov', profession: 'Plastic surgeon', clients: 123, yearsOfExperience: 7, rating: 79, image: 'https://proconnectfontys.blob.core.windows.net/proconnect-images/9e140d43-d89c-4aab-acb0-927351ab8797.jpg'},
    {name: 'Alex Getov', profession: 'Minister of happiness', clients: 21, yearsOfExperience: 5, rating: 99, image: 'https://proconnectfontys.blob.core.windows.net/proconnect-images/d9e0dc6c-4ed3-4b6c-82f8-5ae037c5dd9f.jpeg'},
    {name: 'Jimmy Italiano', profession: 'Party maker', clients: 27, yearsOfExperience: 2, rating: 69},
    {name: `Jimmy Italiano's brother`, profession: 'Lawyer', clients: 27, yearsOfExperience: 7, rating: 49},
  ]

  return (
    <div
      className='w-full h-full flex flex-col justify-start gap-16 mt-10 pb-20'
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
        { data.length && data.map(d => (
            <ExpertCardSM clients={d.clients} name={d.name} profession={d.profession} rating={d.rating} image={d.image} yearsOfExperience={d.yearsOfExperience} key={d.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
