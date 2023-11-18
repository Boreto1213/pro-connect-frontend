import useAxiosPrivate from "./useAxiosPrivate"

const useUserService = () => {
  const axiosPrivate = useAxiosPrivate()

  const updateUserProfile = (data: UpdateUserRequest) => {
    return axiosPrivate.put('/users', data)
  }

  const deleteUserProfile = (userId: number) => {
    return axiosPrivate.delete(`/users/${userId}`)
  }

  return { updateUserProfile, deleteUserProfile }
}

export default useUserService