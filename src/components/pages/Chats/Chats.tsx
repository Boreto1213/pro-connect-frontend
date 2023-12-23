import { FC } from 'react'
import ActiveChatContainer from './ActiveChatContainer'
import ChatSideBar from './ChatSideBar'

interface ChatsProps {}

const Chats: FC<ChatsProps> = ({}) => {

  return (
    <div className='grid grid-cols-10 height-screen-minus-180px'>
      <ChatSideBar />
      <ActiveChatContainer />
    </div>
  )
}

export default Chats
