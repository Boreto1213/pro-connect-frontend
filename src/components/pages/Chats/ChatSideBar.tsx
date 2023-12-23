import { FC } from 'react'
import ChatOption from './ChatOption'
import { Icons } from '../../Icons'
import { Input } from '@nextui-org/react'

interface ChatSideBarProps {
  
}

const ChatSideBar: FC<ChatSideBarProps> = ({}) => {
  return <div className='col-span-3 px-4 py-2 h-full border-r-1 border-gray-200'>
        <div className='flex justify-between items-center'>
          <h3 className='text-slate-700 font-semibold text-xl'>Chats</h3>
          <button className='flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100'>
            <Icons.FileEdit className='w-6 h-6' />
          </button>
        </div>
        {/* <hr className='bg-gray-200 mt-2 mb-4' /> */}
        <Input
          type='text'
          placeholder='Search for chats...'
          labelPlacement='outside'
          endContent={
            <Icons.Search className='text-2xl text-slate-400 pointer-events-none flex-shrink-0' />
          }
        />
        <div className='flex flex-col gap-2 mt-2'>
          <ChatOption />
          <ChatOption />
          <ChatOption />
          <ChatOption />
          <ChatOption />
          <ChatOption />
        </div>
      </div>
}

export default ChatSideBar