export type ChatOptionType = {
  recipientId: number
  recipientName: string
  recipientProfileImageUrl?: string
  lastMessage: string
  lastMessageTimestamp: string
}

export type GetChatsResponse = {
  chats: ChatOptionType[]
}