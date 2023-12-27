import { GetChatsResponse } from '../../types/chat'
import { Message } from '../../types/message'
import { Expert, UpdateUserRequest } from '../../types/user/user'
import useAxiosPrivate from './useAxiosPrivate'

const useUserAPI = () => {
  const apiPath = '/users'

  const axiosPrivate = useAxiosPrivate()
  
  const getUserById = (userId: number) => {
    return axiosPrivate.get<Expert>(`${apiPath}/${userId}`)
  }

  const updateUserProfile = (data: UpdateUserRequest) => {
    return axiosPrivate.put(apiPath, data)
  }

  const updateUserProfileImage = (userId: number, image: File) => {
    const formData = new FormData()
    formData.append('image', image)
    return axiosPrivate.post(`${apiPath}/update/image/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  const deleteUserProfile = (userId: number) => {
    return axiosPrivate.delete(`${apiPath}/${userId}`)
  }

  const getChats = (userId: number) => {
    return axiosPrivate.get<GetChatsResponse>(`/messages/chats?userId=${userId}`)
  } 

  const getChatHistory = (userId1: number, userId2: number) => {
    return axiosPrivate.get<Message[]>(`/messages/chat-history?user1=${userId1}&user2=${userId2}`)
  }

  return { getUserById ,updateUserProfile, deleteUserProfile, updateUserProfileImage, getChats, getChatHistory }
}

export default useUserAPI
