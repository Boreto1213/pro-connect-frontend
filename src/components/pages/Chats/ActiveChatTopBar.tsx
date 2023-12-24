import { FC } from 'react'
import ProfileImage from '../../ui/ProfileImage'
import { Icons } from '../../Icons'

interface ActiveChatTopBarProps {
  profileImageUrl?: string
  recipientName?: string
}

const ActiveChatTopBar: FC<ActiveChatTopBarProps> = ({profileImageUrl, recipientName}) => {
  return (
    <div className='flex items-center justify-between w-full gap-2 px-4 py-2 border-b-1 border-gray-200'>
      <div className='flex items-center gap-2'>
        <ProfileImage size='md' imageUrl={profileImageUrl} />
        <span className='text-slate-700 text-xl font-semibold'>{ recipientName || 'No chat selected' }</span>
      </div>
      <button className='flex items-center text-slate-700 hover:bg-gray-100'>
        <Icons.MoreHorizontal />
      </button>
    </div>
  )
}

export default ActiveChatTopBar
