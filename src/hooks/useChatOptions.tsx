import { useEffect, useState } from 'react'
import { ChatOptionType } from '../types/chat'
import useAuth from './useAuth'
import useUserAPI from './api/useUserAPI'
import { toast } from 'sonner'

export const useChatOptions = () => {
  const {
    auth: { id },
  } = useAuth()

  const [chatOptions, setChatOptions] = useState<ChatOptionType[]>([])
  const { getChats } = useUserAPI()

  useEffect(() => {
    if (id) {
      getChats(id)
      .then((res) => {
        setChatOptions(res.data.chats)
      })
      .catch((_) => {
        toast.error('Something went wrong.')
      })
    }
  }, [])

  return { chatOptions }
}
