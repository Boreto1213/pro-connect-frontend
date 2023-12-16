import { Service } from "./service/service"
import { Expert } from "./user/user"

export type Review = {
  id: number
  text: string
  createdBy: Expert
  service: Service
  createdAt: Date
  rating: number
}

export type CreateReviewRequest = {
  text: string
  clientId: number
  serviceId: number
  createdAt: Date
  rating: number
}

export interface Star {
  checked: boolean
  id: number
}