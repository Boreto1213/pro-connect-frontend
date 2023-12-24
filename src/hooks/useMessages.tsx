import { useContext } from "react"
import { messagesContext } from "../context/MessagesProvider"

export const useMessages = () => {
  return useContext(messagesContext)
}