import { useContext } from "react"
import { stompClientContext } from "../context/StompClientProvider"

export const useStompClient = () => {
  return useContext(stompClientContext)
}