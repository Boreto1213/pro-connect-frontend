import { Category } from "./category"

export type CreateServiceRequest = {
  expertId: number
  title: string
  price: number
  description: string
  tags: Category[]
}