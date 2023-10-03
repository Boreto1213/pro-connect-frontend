import { FC } from 'react'
import donaldTrump from '../../../assets/trump-circle.png'
import Button from '../../ui/Button'
import { Tabs, Tab } from '@nextui-org/react'
import { Icons } from '../../Icons'
import ServiceCardSM from '../Home/ServiceCardSM'

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <div className='w-full flex flex-col mt-10'>
      <div className='relative z-10 flex justify-between items-center gradient'>
        <div className='flex items-end gap-2'>
          <img
            src={donaldTrump}
            alt='X-user profile picture'
            className='w-40 h-40 rounded-full'
          />
          <div className='flex flex-col w-full mb-3'>
            <p className='text-3xl font-semibold text-slate-700'>
              Jimmy Italiano
            </p>
            <p className='text-xl font-semibold text-teal-400'>Party maker</p>
          </div>
        </div>
        <div className='flex items-end h-full gap-1 mb-5'>
          <Button variant='slate'>Edit profile</Button>
          <Button>Add service</Button>
        </div>
      </div>
      <div className='flex mt-14'>
        <div className='flex flex-col items-start gap-8 w-[50%]'>
          <p className='text-md font-medium '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            deleniti ipsa quae numquam. Perferendis, reprehenderit. Facere amet
            consectetur consequatur reiciendis culpa quod ut voluptatibus
            quisquam minima nemo. Magnam et rerum nesciunt quibusdam eveniet,
            enim eaque unde non quo delectus sit neque nulla ratione reiciendis,
            repudiandae tempore libero. Voluptatem, optio neque repellat,
            delectus obcaecati vel unde corporis sapiente ex velit vero illum
            in, accusantium dolore quo reprehenderit voluptates? Quod
            consectetur dolorum nulla ex unde architecto magni, tempora ullam
            itaque voluptate voluptatum quisquam nesciunt consequatur optio, ab,
            ut iusto eos saepe error fugit minus suscipit? Porro expedita ut
            vero pariatur temporibus modi ipsam animi molestiae dicta eaque
            optio neque ad repellat vitae totam hic recusandae odio saepe iste
            cupiditate, nisi sed!
          </p>
          <div className='flex flex-col items-start gap-2'>
            <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
              <Icons.ShieldCheck className='w-4 h-4 text-gray-400' />7 years of
              experience as Party maker
            </span>
            <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
              <Icons.Globe className='w-4 h-4 text-gray-400' />
              www.donaldpump.com
            </span>
            <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
              <Icons.Clipboard className='w-4 h- text-gray-400' />
              CV here
            </span>
            <span className='flex justify-center items-center gap-1 text-md text-semibold text-gray-400'>
              <Icons.User className='w-4 h-4 text-gray-400' />
              3,543 clients
            </span>
            <span className='flex justify-center items-center gap-1 text-lg text-semibold text-teal-400'>
              <Icons.ThumbsUp className='w-4 h- text-teal-400' />
              79% would work again
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-start items-center gap-8 w-[50%]'>
          <ServiceCardSM />
          <ServiceCardSM />
          <ServiceCardSM />
          <ServiceCardSM />
          <ServiceCardSM />


        </div>
      </div>
    </div>
  )
}

export default Profile
