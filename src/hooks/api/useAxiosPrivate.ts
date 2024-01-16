import { axiosPrivate } from '../../api/axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import useAuth from '../useAuth'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  retry: boolean
}

const useAxiosPrivate = () => {
  const refresh = useRefreshToken()
  const { auth } = useAuth()
  // console.log('Auth:', auth);
  
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // const requestInterceptor = axiosPrivate.interceptors.request.use(
    //   (config) => {
    //     if (!config.headers['Authorization']) {
    //       config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
    //     }

    //     return config
    //   },
    //   (error: AxiosError) => Promise.reject(error)
    // )

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const prevRequest = error.config as CustomAxiosRequestConfig

        if (
          prevRequest.headers &&
          error.response?.status === 401 &&
          !prevRequest.retry
        ) {
          prevRequest.retry = true
          try {
            const newAccessToken = await refresh()
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          } catch (refreshError) {
            navigate('/auth/login', {
              state: { from: location },
              replace: true,
            })
            return Promise.reject(refreshError)
          }

          return axiosPrivate(prevRequest)
        }
        return Promise.reject(error)
      }
    )

    return () => {
      // axiosPrivate.interceptors.request.eject(requestInterceptor)
      axiosPrivate.interceptors.response.eject(responseInterceptor)
    }
  }, [auth, refresh])

  return axiosPrivate
}

export default useAxiosPrivate
