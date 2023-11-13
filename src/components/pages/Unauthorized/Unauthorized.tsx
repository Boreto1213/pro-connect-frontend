import { FC } from 'react'
import { Icons } from '../../Icons'
import Button from '../../ui/Button'
import { useNavigate } from 'react-router-dom'

interface UnauthorizedProps {}

const Unauthorized: FC<UnauthorizedProps> = ({}) => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div className='flex flex-col height-screen-minus-280 items-center gap-5 w-full pt-10'>
      <Icons.Unauthorized />
      <div className='flex flex-col gap-1 items-center justify-center'>
      <h1 className='text-7xl text-gray-700 text-semibold'>Ops...</h1>
      <h3 className='text-2xl text-gray-700 text-semibold'>
        You are not authorized to visit this page.
      </h3>

      </div>

      <Button onClick={goBack}>Go back</Button>
    </div>
  )
}

export default Unauthorized
