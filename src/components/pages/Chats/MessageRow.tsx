import { FC } from 'react'
import { Message } from '../../../types/message'
import { cn } from '../../../lib/utils'

interface MessageRowProps {
  message: Message
  userId: number
  hasNextMessageFromSameUser: () => boolean
  hasPrevMessageFromSameUser: () => boolean
}

const MessageRow: FC<MessageRowProps> = ({message, userId, hasNextMessageFromSameUser, hasPrevMessageFromSameUser}) => {
  
  
  const isCurrentUser = message.senderId == userId

              

  return <div
  key={message.id}
  className={cn('flex', {
    'justify-end': isCurrentUser,
  })}
>
  <span
    className={cn('bg-gray-100 rounded-xl px-2 py-1', {
      'bg-teal-500 text-white': isCurrentUser,
      'rounded-br-sm':
        isCurrentUser && hasNextMessageFromSameUser(),
      'rounded-tr-sm':
        isCurrentUser && hasPrevMessageFromSameUser(),
      'rounded-bl-sm':
        !isCurrentUser && hasNextMessageFromSameUser(),
      'rounded-tl-sm':
        !isCurrentUser && hasPrevMessageFromSameUser(),
    })}
  >
    {message.text}
  </span>
</div>
}

export default MessageRow