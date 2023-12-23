import { FC } from 'react'
import ProfileImage from '../../ui/ProfileImage'
import { ChatOptionType } from '../../../types/chat'

interface ChatOptionProps {
  chatData: ChatOptionType
}

const ChatOption: FC<ChatOptionProps> = ({ chatData }) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const shortenedLastMessage =
    chatData.lastMessage.length > 10
      ? `${chatData.lastMessage.slice(0, 10)}...`
      : chatData.lastMessage
  const lastMessageDate = new Date(chatData.lastMessageTimestamp)
  const todayDate = new Date()
  const dateToShow = areSameDate(lastMessageDate, todayDate)
    ? `${lastMessageDate.getHours()}:${lastMessageDate.getMinutes()}`
    : lastMessageDate.getFullYear() === todayDate.getFullYear()
    ? `${monthNames[lastMessageDate.getMonth()].slice(
        0,
        3
      )} ${lastMessageDate.getDate()}`
    : `${lastMessageDate.getDate()}/${
        lastMessageDate.getMonth() + 1
      }/${lastMessageDate.getFullYear()}`

  function areSameDate(date1: Date, date2: Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  return (
    <div className='flex gap-1 items-center px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-100'>
      <ProfileImage size='md' imageUrl={chatData.recipientProfileImageUrl} />
      <div className='flex flex-col'>
        <span className='text-slate-700 font-semibold text-base'>
          {chatData.recipientName}
        </span>
        <span className='text-slate-500 font-semibold text-xs'>
          {shortenedLastMessage} · {dateToShow}
        </span>
      </div>
    </div>
  )
}

export default ChatOption
