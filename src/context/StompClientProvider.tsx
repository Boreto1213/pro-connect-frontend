import { Client } from '@stomp/stompjs'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type StompClientContextType = {
  stompClient: Client | undefined
  setStompClient: Dispatch<SetStateAction<Client | undefined>>
}

export const stompClientContext = createContext<StompClientContextType>({
  stompClient: undefined,
  setStompClient: () => {},
})

import { FC } from 'react'

interface StompClientContextProps {
  children: ReactNode
}

const StompClientProvider: FC<StompClientContextProps> = ({ children }) => {
  const [stompClient, setStompClient] = useState<Client | undefined>()

  return (
    <stompClientContext.Provider value={{ stompClient, setStompClient }}>
      {children}
    </stompClientContext.Provider>
  )
}

export default StompClientProvider
