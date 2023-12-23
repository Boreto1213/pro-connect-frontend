import { FC } from 'react'
import CreateServiceForm from './CreateServiceForm'
import { Icons } from '../../Icons'

interface CreateServiceProps {}

const CreateService: FC<CreateServiceProps> = ({}) => {
  return (
    <div className='flex justify-evenly items-center pb-20'>
      <CreateServiceForm />
      <Icons.Idea className='h-[500px] w-[500px]' />
    </div>
  )
}

export default CreateService
