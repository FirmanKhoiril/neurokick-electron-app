import { useState, useContext, createContext, useMemo } from 'react'

interface AppContextValue {
  isTranscript: boolean
  setIsTranscript: (value: boolean) => void
}

const StateContext = createContext<AppContextValue>({
  isTranscript: false,
  setIsTranscript: () => {}
})

export const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [isTranscript, setIsTranscript] = useState(true)

  const contextValue = useMemo(
    () => ({ isTranscript, setIsTranscript }),
    [isTranscript, setIsTranscript]
  )

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>
}

export const useGlobalState = (): any => useContext(StateContext)
