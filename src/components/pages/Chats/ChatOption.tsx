import { FC } from 'react'
import ProfileImage from '../../ui/ProfileImage'

interface ChatOptionProps {}

const ChatOption: FC<ChatOptionProps> = ({}) => {
  return (
    <div className='flex gap-1 items-center px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-100'>
      <ProfileImage size='md' />
      <span className='text-slate-700 font-semibold text-lg'>Alex Getov</span>
    </div>
  )
}

export default ChatOption
