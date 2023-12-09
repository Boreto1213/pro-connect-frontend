import { Service } from "./service/service"

export type Review = {
  id: number
  text: string
  createdBy: Client
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