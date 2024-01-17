import { useContext } from "react"
import { expertFilterContext } from "../context/ExpertFilterProvider"

export const useExpertFilter = () => {
  return useContext(expertFilterContext)
}