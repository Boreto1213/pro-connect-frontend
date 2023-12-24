import { FC, useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Message } from '../../../types/message'
import ActiveChatTopBar from './ActiveChatTopBar'
import SendMessage from './SendMessage'
import { Client, IMessage } from '@stomp/stompjs'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'sonner'
import MessageRow from './MessageRow'
import { ChatOptionType } from '../../../types/chat'

interface ActiveChatContainerProps {
  data: ChatOptionType | undefined
}

const ActiveChatContainer: FC<ActiveChatContainerProps> = ({ data }) => {
  const {
    auth: { id },
  } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedChatPartnerId, setSelectedChatPartnerId] = useState<
    number | undefined
  >(id === 10 ? 9 : 10)
  const [stompClient, setStompClient] = useState<Client | undefined>()

  useEffect(() => {
    const setupStompClient = () => {
      // stomp client over websockets
      const stompClient = new Client({
        brokerURL: 'ws://localhost:8080/ws',
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      })

      stompClient.onConnect = () => {
        // subscribe to the backend "private" topic
        stompClient.subscribe(`/user/${id}/queue/inboxmessages`, (data) => {
          onMessageReceived(data)
        })
      }

      // initiate client
      stompClient.activate()

      // maintain the client for sending and receiving
      setStompClient(stompClient)
    }

    setupStompClient()

  }, [])

  // send the data using Stomp
  const sendMessage = (newMessage: string) => {
    if (stompClient && selectedChatPartnerId) {
      const payload: Message = {
        id: Number(uuidv4()),
        senderId: id,
        receiverId: selectedChatPartnerId,
        text: newMessage,
      }
      stompClient.publish({
        destination: `/user/${selectedChatPartnerId}/queue/inboxmessages`,
        body: JSON.stringify(payload),
      })

      setMessages((messagesReceived) => [...messagesReceived, payload])
    } else {
      toast.error('Could not send a message.')
    }
  }

  // display the received data
  const onMessageReceived = (data: IMessage) => {
    const message: Message = JSON.parse(data.body)
    setMessages((messagesReceived) => [...messagesReceived, message])
  }

  return (
    <div className='flex flex-col col-span-7 border-r-1 border-gray-200 h-full'>
      <ActiveChatTopBar profileImageUrl={data?.recipientProfileImageUrl} recipientName={data?.recipientName} />
      <div className='flex flex-col justify-end gap-0.5 flex-grow px-4 py-2'>
        <div className='flex justify-center text-gray-400 text-sm font-semibold'>
          Start of chat: 22.12.2023
        </div>
        {messages.length
          ? messages.map((m, i) => {
              const hasNextMessageFromSameUser = () => {
                return messages[i + 1]?.senderId === messages[i].senderId
              }

              const hasPrevMessageFromSameUser = () => {
                return messages[i - 1]?.senderId === messages[i].senderId
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
