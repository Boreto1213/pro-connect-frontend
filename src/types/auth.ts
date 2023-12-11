import { Dispatch, SetStateAction } from "react"

export type Auth = {
  accessToken: string
  refreshToken: string
  id: number
  firstName: string
  lastName: string
  profileImageUrl: string
  role: string
}

export type AuthContextType = {
  auth: Auth
  setAuth: Dispatch<SetStateAction<Auth>>
}