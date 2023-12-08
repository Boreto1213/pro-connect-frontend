import { useContext } from "react"
import { ServiceContext } from "../context/ServiceProvider"

export const useServices = () => {
  return useContext(ServiceContext)
}