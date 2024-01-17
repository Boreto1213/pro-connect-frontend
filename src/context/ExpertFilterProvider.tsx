import { Dispatch, SetStateAction, createContext, FC, ReactNode, useState } from 'react'

type ExpertFilter = {
  query: string // name, profession
  yearsOfExperience: number // minimum years of exp
  rating: number
}

type ExpertFilterContextType = {
  filter: ExpertFilter
  setFilter: Dispatch<SetStateAction<ExpertFilter>>
}

const defaultValue = { query: '', yearsOfExperience: 0, rating: 0}

export const expertFilterContext = createContext<ExpertFilterContextType>({
  filter: defaultValue,
  setFilter: () => {},
})


interface ExpertFilterProviderProps {
  children: ReactNode
}

const ExpertFilterProvider: FC<ExpertFilterProviderProps> = ({children}) => {
  const [filter, setFilter] = useState<ExpertFilter>(defaultValue)
  return <expertFilterContext.Provider value={{filter, setFilter}}>
    {children}
  </expertFilterContext.Provider>
}

export default ExpertFilterProvider
