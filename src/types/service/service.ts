import { Category } from "./category"

export type Service = {
  id: number
  title: string
  expert: User
  price: number
  description: string
  tags: Category[]
}