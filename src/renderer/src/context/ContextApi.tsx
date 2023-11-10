import { AppContextValue, StateContext } from '@renderer/types/Context'
import { useState, useContext, useMemo } from 'react'

export const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [isTranscript, setIsTranscript] = useState(true)
  const [nameCall, setNameCall] = useState('')
  const [searchConversation, setSearchConversation] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [toogleNewCall, setToogleNewCall] = useState(false)
  const [toogleSpeakInsites, setToogleSpeakInsites] = useState(false)
  const [speakAnalysisId, setSpeakAnalysisId] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const contextValue = useMemo(
    () => ({
      searchConversation,
      setSearchConversation,
      isTranscript,
      speakAnalysisId,
      isAuth,
      setIsAuth,
      isSignup,
      setIsSignup,
      setSpeakAnalysisId,
      nameCall,
      setNameCall,
      setIsTranscript,
      toogleSpeakInsites,
      setToogleSpeakInsites,
      toogleNewCall,
      showPassword,
      setShowPassword,
      setToogleNewCall
    }),
    [
      isTranscript,
      isAuth,
      setIsAuth,
      searchConversation,
      showPassword,
      setShowPassword,
      speakAnalysisId,
      isSignup,
      setIsSignup,
      setSpeakAnalysisId,
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
