import { Dispatch, SetStateAction } from "react"

export type Auth = {
  accessToken: string
  refreshToken: string
  email: string
  password: string
  role: string
}

export type AuthContextType = {
  auth: Auth
  setAuth: Dispatch<SetStateAction<Auth>>
}