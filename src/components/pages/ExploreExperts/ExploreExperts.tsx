import { FC, useState } from 'react'
import ExpertFilter from './ExpertFilter'
import ExpertCardSM from '../Home/ExpertCardSM'
import { useExpertFilter } from '../../../hooks/useExpertFilter'

interface ExploreExpertsProps {}

const ExploreExperts: FC<ExploreExpertsProps> = ({}) => {
  const {
    filter: { query, rating, yearsOfExperience },
  } = useExpertFilter()
  console.log({ query, rating, yearsOfExperience });
  
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
  ]
  const filteredData = data.filter(
    (d) =>
      (d.name.toLowerCase().includes(query.toLowerCase()) || d.profession.toLowerCase().includes(query.toLowerCase())) &&
      d.rating >= rating * 100 &&
      d.yearsOfExperience >= yearsOfExperience
  )
  // const [data, setdata] = useState([
  //   {name: 'Boris Damianov', profession: 'Plastic surgeon', clients: 123, yearsOfExperience: 7, rating: 79, image: 'https://proconnectfontys.blob.core.windows.net/proconnect-images/9e140d43-d89c-4aab-acb0-927351ab8797.jpg'},
  //   {name: 'Alex Getov', profession: 'Minister of happiness', clients: 21, yearsOfExperience: 5, rating: 99, image: 'https://proconnectfontys.blob.core.windows.net/proconnect-images/d9e0dc6c-4ed3-4b6c-82f8-5ae037c5dd9f.jpeg'},
  //   {name: 'Jimmy Italiano', profession: 'Party maker', clients: 27, yearsOfExperience: 2, rating: 69},
  // ])

  return (
    <div className='flex justify-center px-8 py-6 pb-[360px]'>
      <div className='grid grid-cols-10 gap-0 w-full'>
        <ExpertFilter />
        <div className='grid grid-cols-3 col-span-7 gap-4'>
          {filteredData.length &&
            filteredData.map((d) => (
              <ExpertCardSM
                clients={d.clients}
                name={d.name}
                profession={d.profession}
                rating={d.rating}
                image={d.image}
                yearsOfExperience={d.yearsOfExperience}
                key={d.name}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreExperts
