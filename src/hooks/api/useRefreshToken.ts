import axios from '../../api/axios'
import useAuth from '../useAuth'

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth()

  const refresh = async () => {
    const response = await axios.get('/auth/refresh-token', {
      headers: {
        Authorization: `Bearer ${auth.refreshToken}`,
      },
    })
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.accessToken }
    })

    return response.data.accessToken
  }

  return refresh
}

export default useRefreshToken
