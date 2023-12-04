interface User {
  id: number
  email: string
  password?: string
  firstName: string
  lastName: string
  phone: string
  city: string
  address: string
}

interface Expert extends User {
  bio: string
  dislikes: number
  likes: number
  profession: string
  yearsOfExperience: number
}

interface Client extends User {}

interface UpdateUserRequest {
  id: number
  email: string
  password?: string
  firstName: string
  lastName: string
  phone: string
  city: string
  address: string
  bio: string
  profession: string
  yearsOfExperience: number
}