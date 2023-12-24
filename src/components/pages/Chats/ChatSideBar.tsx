import { FC, useEffect, useState } from 'react'
import ChatOption from './ChatOption'
import { Icons } from '../../Icons'
import { Input } from '@nextui-org/react'
import useUserAPI from '../../../hooks/api/useUserAPI'
import { ChatOptionType } from '../../../types/chat'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'sonner'

interface ChatSideBarProps {
  chatOptions: ChatOptionType[]
}

const ChatSideBar: FC<ChatSideBarProps> = ({ chatOptions}) => {


  

  return (
    <div className='col-span-3 px-4 py-2 h-full border-r-1 border-gray-200'>
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
        {chatOptions.length ? (
          chatOptions.map((c) => <ChatOption chatData={c} />)
        ) : (
          <p className='w-full text-center text-medium font-semibold text-slate-700'>
            No chats to show yet. :(
          </p>
        )}
      </div>
    </div>
  )
}

export default ChatSideBar
