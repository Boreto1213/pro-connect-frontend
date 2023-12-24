import { FC, useRef, KeyboardEvent } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { Icons } from '../../Icons'
import { toast } from 'sonner'
import { useGetQueryParam } from '../../../hooks/useGetQueryParam'

interface SendMessageProps {
  onSend: (message: string) => void
}

const SendMessage: FC<SendMessageProps> = ({ onSend }) => {
  const getQueryParam = useGetQueryParam()
  const recipientId = getQueryParam('recipientId')
  console.log(recipientId, !!recipientId);
  

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const onClick = () => {
    if (textAreaRef.current && textAreaRef.current.value.length > 0) {
      onSend(textAreaRef.current.value)
      textAreaRef.current.value = ''
    } else {
      toast.error(`Can't send an empty message.`)
    }
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key == 'Enter') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <div className='flex items-end gap-2 px-4 py-2'>
      <ReactTextareaAutosize
        onKeyDown={onKeyDown}
        disabled={!!!recipientId}
        ref={textAreaRef}
        maxRows={8}
        rows={3}
        placeholder='Message...'
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <button
        disabled={!!!recipientId}
        onClick={onClick}
        className='flex items-cente text-teal-500 hover:bg-gray-100'
      >
        <Icons.SendHorizonal fill='#14b8a5' />
      </button>
    </div>
  )
}

export default SendMessage
