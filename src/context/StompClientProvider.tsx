import { Client } from "@stomp/stompjs";
import { ReactNode, createContext, useEffect, useState } from "react";

type StompClientContextType = {
  stompClient: Client | undefined
}


const stompClientContext = createContext<StompClientContextType>({stompClient: undefined})


import { FC } from 'react'

interface StompClientContextProps {
  children: ReactNode
}

const StompClientProvider: FC<StompClientContextProps> = ({ children}) => {
  const [stompClient, setStompClient] = useState<Client | undefined>()

  useEffect(() => {
    setStompClient
  }, [])

  return <stompClientContext.Provider value={{stompClient: stompClient}}>
    { children }
  </stompClientContext.Provider>
}

export default StompClientProvider

