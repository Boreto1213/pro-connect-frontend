import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../../Icons'
import Button from '../../ui/Button'

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center gap-5 w-full pt-10'>
      <Icons.NotFound />
      <div className='flex flex-col gap-1'>
        <h1 className='text-7xl text-gray-700 text-semibold'>Ops...</h1>
        <h3 className='text-2xl text-gray-700 text-semibold'>
          Page not found.
        </h3>
      </div>
      <Button onClick={() => navigate('/dashboard/home')}>To home</Button>
    </div>
  )
}
export default NotFound
