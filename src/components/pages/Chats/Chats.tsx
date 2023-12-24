import { FC } from 'react'
import ActiveChatContainer from './ActiveChatContainer'
import ChatSideBar from './ChatSideBar'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'
import { useChatOptions } from '../../../hooks/useChatOptions'

interface ChatsProps {}

const Chats: FC<ChatsProps> = ({}) => {
  const { chatOptions } = useChatOptions()
  
  const getQueryParam = useGetQueryParam()
  const recipientId = getQueryParam('recipientId')
  const activeChat = chatOptions.find(
    (c) => recipientId && c.recipientId == Number(recipientId)
  )
  
  return (
    <div className='grid grid-cols-10 height-screen-minus-180px'>
      <ChatSideBar chatOptions={chatOptions} />
      <ActiveChatContainer data={activeChat} />
    </div>
  )
}

export default Chats
