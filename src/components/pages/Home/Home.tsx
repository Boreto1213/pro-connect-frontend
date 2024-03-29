import { FC } from 'react'
import DataBanners from './DataBanners'
import SlideArrows from './SlideArrows'
import ServiceCardSM from './ServiceCardSM'
import ExpertCardSM from './ExpertCardSM'
import { AppDataBanner } from '../../../types/app-data-banner'

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const bannerData: AppDataBanner[] = [
    {
      word: 'members',
      number: '39k+',
      href: '/dashboard/experts',
      bgColor: 'teal',
    },
    {
      word: 'experts',
      number: '5k+',
      href: '/dashboard/experts',
      bgColor: 'teal',
    },
    {
      word: 'services',
      number: '10k+',
      href: '/dashboard/services',
      bgColor: 'slate',
    },
    {
      word: 'reviews',
      number: '200k',
      href: '/dashboard/services',
      bgColor: 'gray',
    },
  ]

  const data = [
    {
      name: 'Boris Damianov',
      profession: 'Plastic surgeon',
      clients: 123,
      yearsOfExperience: 7,
      rating: 79,
      image:
        'https://proconnectfontys.blob.core.windows.net/proconnect-images/9e140d43-d89c-4aab-acb0-927351ab8797.jpg',
    },
    {
      name: 'Alex Getov',
      profession: 'Minister of happiness',
      clients: 21,
      yearsOfExperience: 5,
      rating: 99,
      image:
        'https://proconnectfontys.blob.core.windows.net/proconnect-images/d9e0dc6c-4ed3-4b6c-82f8-5ae037c5dd9f.jpeg',
    },
    {
      name: 'Jimmy Italiano',
      profession: 'Party maker',
      clients: 27,
      yearsOfExperience: 2,
      rating: 69,
    },
    {
      name: `Jimmy Italiano's brother`,
      profession: 'Lawyer',
      clients: 27,
      yearsOfExperience: 7,
      rating: 49,
    },
  ]

  const services = [
    {
      clientsCount: 221,
      expertName: 'Alex Getov',
      expertProfession: 'Minister of happiness',
      profileImageUrl:
        'https://proconnectfontys.blob.core.windows.net/proconnect-images/d9e0dc6c-4ed3-4b6c-82f8-5ae037c5dd9f.jpeg',
      rating: 4.9,
      reviewsCount: 99,
      serviceTitle: 'Personal therapy sessions',
      tags: [
        { id: 0, text: 'Professional Advice' },
        { id: 1, text: 'Online' },
      ],
    },
    {
      clientsCount: 111,
      expertName: 'Boris Damianov',
      expertProfession: 'Plastic surgeon',
      profileImageUrl:
        'https://proconnectfontys.blob.core.windows.net/proconnect-images/9e140d43-d89c-4aab-acb0-927351ab8797.jpg',
      rating: 4.4,
      reviewsCount: 22,
      serviceTitle: 'Hearth transplantation',
      tags: [
        { id: 0, text: 'Health' },
      ],
    },
    {
      clientsCount: 123,
      expertName: 'Alex Getov',
      expertProfession: 'Minister of happiness',
      profileImageUrl:
        'https://proconnectfontys.blob.core.windows.net/proconnect-images/d9e0dc6c-4ed3-4b6c-82f8-5ae037c5dd9f.jpeg',
      rating: 4.6,
      reviewsCount: 22,
      serviceTitle: 'Couple therapy sessions',
      tags: [
        { id: 0, text: 'Professional Advice' },
        { id: 1, text: 'Online' },
      ],
    },
  ]

  return (
    <div className='w-full h-full flex flex-col justify-start gap-16 mt-10 pb-20'>
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
          { services.length && services.map((s, i) => (
            <ServiceCardSM key={i}
            clientsCount={s.clientsCount}
            expertName={s.expertName}
            expertProfession={s.expertProfession}
            profileImageUrl={s.profileImageUrl}
            rating={s.rating}
            reviewsCount={s.reviewsCount}
            serviceTitle={s.serviceTitle}
            tags={s.tags}/>
          ))}
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl text-slate-700'>Popular experts</h2>
          <SlideArrows />
        </div>
        <div className='flex justify-between items-center gap-5 mt-10'>
          {data.length &&
            data.map((d, i) => (
              <ExpertCardSM
                key={i}
                clients={d.clients}
                name={d.name}
                profession={d.profession}
                rating={d.rating}
                image={d.image}
                yearsOfExperience={d.yearsOfExperience}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
