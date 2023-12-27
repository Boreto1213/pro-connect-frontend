import { FC, useContext } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Message } from '../../../types/message'
import ActiveChatTopBar from './ActiveChatTopBar'
import SendMessage from './SendMessage'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'sonner'
import MessageRow from './MessageRow'
import { ChatOptionType } from '../../../types/chat'
import { stompClientContext } from '../../../context/StompClientProvider'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'
import { useMessages } from '../../../hooks/useMessages'

interface ActiveChatContainerProps {
  data: ChatOptionType | undefined
}

const ActiveChatContainer: FC<ActiveChatContainerProps> = ({ data }) => {
  const {
    auth: { id },
  } = useAuth()
  const { messages, setMessages} = useMessages()
  const getQueryParam = useGetQueryParam()
  const recipientId = getQueryParam('recipientId')
  const { stompClient } = useContext(stompClientContext)

  const sendMessage = (newMessage: string) => {
    if (stompClient && recipientId) {
      const message: Message = {
        id: uuidv4(),
        senderId: id,
        receiverId: Number(recipientId),
        text: newMessage,
        timestamp: new Date()
      }
      stompClient.publish({
        destination: `/direct-message`,
        body: JSON.stringify(message),
      })
      setMessages((prev) => ({
        ...prev,
        [message.receiverId]: [...(prev[message.receiverId] || []), message],
      }))
    } else {
      toast.error('Could not send a message.')
    }
  }

  return (
    <div className='flex flex-col col-span-7 border-r-1 border-gray-200 h-full'>
      <ActiveChatTopBar profileImageUrl={data?.recipientProfileImageUrl} recipientName={data?.recipientName} />
      <div className='flex flex-col justify-end gap-0.5 flex-grow px-4 py-2'>
        <div className='flex justify-center text-gray-400 text-sm font-semibold'>
          Start of chat: 22.12.2023
        </div>
        {recipientId && (messages[recipientId] || []).length
          ? messages[recipientId].map((m, i) => {
              const hasNextMessageFromSameUser = () => {
                return messages[recipientId][i + 1]?.senderId === messages[recipientId][i].senderId
              }

              const hasPrevMessageFromSameUser = () => {
                return messages[recipientId][i - 1]?.senderId === messages[recipientId][i].senderId
              }

              return (
                <MessageRow
                  userId={id}
                  message={m}
                  hasNextMessageFromSameUser={hasNextMessageFromSameUser}
                  hasPrevMessageFromSameUser={hasPrevMessageFromSameUser}
                />
              )
            })
          : null}
      </div>
      <SendMessage onSend={sendMessage} />
    </div>
  )
}

export default ActiveChatContainer
