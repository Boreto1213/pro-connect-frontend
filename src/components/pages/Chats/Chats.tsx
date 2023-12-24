import { FC, useEffect, useState } from 'react'
import ActiveChatContainer from './ActiveChatContainer'
import ChatSideBar from './ChatSideBar'
import { ChatOptionType } from '../../../types/chat'
import useUserAPI from '../../../hooks/api/useUserAPI'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'sonner'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'

interface ChatsProps {}

const Chats: FC<ChatsProps> = ({}) => {
  const {
    auth: { id },
  } = useAuth()
  const [chatOptions, setChatOptions] = useState<ChatOptionType[]>([])
  const { getChats } = useUserAPI()
  const getQueryParam = useGetQueryParam()
  const recipientId = getQueryParam('recipientId')
  const activeChat = chatOptions.find(
    (c) => recipientId && c.recipientId == Number(recipientId)
  )

  useEffect(() => {
    getChats(id)
      .then((res) => {
        setChatOptions(res.data.chats)
      })
      .catch((_) => {
        toast.error('Something went wrong.')
      })
  }, [])
  return (
    <div className='grid grid-cols-10 height-screen-minus-180px'>
      <ChatSideBar chatOptions={chatOptions} />
      <ActiveChatContainer data={activeChat} />
    </div>
  )
}

export default Chats
