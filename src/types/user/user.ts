import { Dispatch, SetStateAction } from "react"

export interface User {
  id: number
  email: string
  password?: string
  firstName: string
  lastName: string
  phone: string
  city: string
  address: string
  profileImageUrl: string
}

export interface Expert extends User {
  bio: string
  dislikes: number
  likes: number
  profession: string
  yearsOfExperience: number
}

export interface Client extends User {}

export interface UpdateUserRequest {
  id: number
  email: string
  // password: string
  firstName: string
  lastName: string
  phone: string
  city: string
  address: string
  bio?: string
  profession?: string
  yearsOfExperience?: number
}

export interface UserDetailsContextType {
  user?: Expert
  setUser: Dispatch<SetStateAction<Expert | undefined>>
  updated: boolean
  setUpdated: Dispatch<SetStateAction<boolean>>
}