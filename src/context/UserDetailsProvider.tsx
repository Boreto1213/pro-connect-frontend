import { createContext, FC, useState, ReactNode } from "react";
import { Expert, UserDetailsContextType } from "../types/user/user";

export const UserDetailsContext = createContext<UserDetailsContextType>({
  user: undefined,
  setUser: () => {},
  updated: false,
  setUpdated: () => {},
})


interface UserDetailsProviderProps {
  children: ReactNode
}

const UserDetailsProvider: FC<UserDetailsProviderProps> = ({ children }) => {
  
  const [user, setUser] = useState<Expert | undefined>()
  const [updated, setUpdated] = useState<boolean>(false)
  
  return <UserDetailsContext.Provider value={{ user, setUser, updated, setUpdated}}>
    {children}
  </UserDetailsContext.Provider>
}

export default UserDetailsProvider