import {
  Dispatch,
  SetStateAction,
  createContext,
  FC,
  ReactNode,
  useState,
} from 'react'
import { Message } from '../types/message'

type Messages = { [key: string]: Message[] }

type MessagesContextType = {
  messages: Messages
  setMessages: Dispatch<SetStateAction<Messages>>
}

export const messagesContext = createContext<MessagesContextType>({
  messages: {},
  setMessages: () => {},
})

interface MessagesProviderProps {
  children: ReactNode
}

const MessagesProvider: FC<MessagesProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Messages>({})
  return (
    <messagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </messagesContext.Provider>
  )
}

export default MessagesProvider
