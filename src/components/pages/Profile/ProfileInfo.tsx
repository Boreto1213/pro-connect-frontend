import { FC } from 'react'
import { Icons } from '../../Icons'
import ServiceCardSM from '../Home/ServiceCardSM'

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = ({}) => {
  return (
    <>
      <div className='flex flex-col items-start gap-8 w-[50%]'>
        <p className='text-md font-medium '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          deleniti ipsa quae numquam. Perferendis, reprehenderit. Facere amet
          consectetur consequatur reiciendis culpa quod ut voluptatibus quisquam
          minima nemo. Magnam et rerum nesciunt quibusdam eveniet, enim eaque
          unde non quo delectus sit neque nulla ratione reiciendis, repudiandae
          tempore libero. Voluptatem, optio neque repellat, delectus obcaecati
          vel unde corporis sapiente ex velit vero illum in, accusantium dolore
          quo reprehenderit voluptates? Quod consectetur dolorum nulla ex unde
          architecto magni, tempora ullam itaque voluptate voluptatum quisquam
          nesciunt consequatur optio, ab, ut iusto eos saepe error fugit minus
          suscipit? Porro expedita ut vero pariatur temporibus modi ipsam animi
          molestiae dicta eaque optio neque ad repellat vitae totam hic
          recusandae odio saepe iste cupiditate, nisi sed!
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
    </>
  )
}

export default ProfileInfo
