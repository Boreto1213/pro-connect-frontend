import { FC } from 'react'
import globalNetwork from '../../../assets/global-network.png'
interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className='flex justify-evenly items-center h-full height-screen-minus-180px'>
      <div className='space-y-6'>
        <h2 className='text-4xl font-semibold text-teal-500'>
          Pro<span className='text-slate-500'>Connect</span>
        </h2>
        <p className='max-w-xl text-lg'>
          Welcome to our innovative connectivity app, where knowledge knows no
          bounds. We are your gateway to a world of expertise, connecting you
          with accomplished professionals from a diverse range of fields.
          Whether you're seeking guidance, consultation, or specialized
          services, our platform brings together experts who are ready to
          assist. Here, you'll find a community of experts offering their
          valuable insights and skills to help you succeed. Join us on this
          journey of learning, growth, and collaboration, where expertise meets
          opportunity.
        </p>
      </div>
      <img
        src={globalNetwork}
        className='h-[500px] w-[500px] z-10 logo hidden lg:block'
        alt='global network'
      />
    </div>
  )
}

export default About
