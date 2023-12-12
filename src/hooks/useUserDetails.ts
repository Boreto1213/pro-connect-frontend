import { useContext } from "react";
import { UserDetailsContext } from "../context/UserDetailsProvider";

export const useUserDetails = () => {
  return useContext(UserDetailsContext)
}