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

  return { getUserById ,updateUserProfile, deleteUserProfile, updateUserProfileImage }
}

export default useUserAPI
