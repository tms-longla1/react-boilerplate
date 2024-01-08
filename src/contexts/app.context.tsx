import { getAccessTokenToLocalStorage } from '@/utils/auth'
import { createContext, useState } from 'react'

type TAppContextInterface = {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAppContext: TAppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenToLocalStorage()),
  setIsAuthenticated: () => null
}

export const AppContext = createContext<TAppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AppContext.Provider>
}
