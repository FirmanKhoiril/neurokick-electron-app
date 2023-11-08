import { AppContextValue, StateContext } from '@renderer/types/Context'
import { useState, useContext, useMemo } from 'react'

export const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [isTranscript, setIsTranscript] = useState(true)
  const [nameCall, setNameCall] = useState('')
  const [searchConversation, setSearchConversation] = useState('')
  const [toogleNewCall, setToogleNewCall] = useState(false)
  const [toogleSpeakInsites, setToogleSpeakInsites] = useState(false)

  const contextValue = useMemo(
    () => ({
      searchConversation,
      setSearchConversation,
      isTranscript,
      nameCall,
      setNameCall,
      setIsTranscript,
      toogleSpeakInsites,
      setToogleSpeakInsites,
      toogleNewCall,
      setToogleNewCall
    }),
    [
      isTranscript,
      searchConversation,
      setSearchConversation,
      nameCall,
      setNameCall,
      setIsTranscript,
      toogleSpeakInsites,
      setToogleSpeakInsites,
      toogleNewCall,
      setToogleNewCall
    ]
  )
  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>
}

export const useGlobalState = (): AppContextValue => useContext(StateContext)
