import { Dispatch, SetStateAction } from "react"

export type Auth = {
  accessToken: string
  refreshToken: string
  id: number
  role: string
}

export type AuthContextType = {
  auth: Auth
  setAuth: Dispatch<SetStateAction<Auth>>
}