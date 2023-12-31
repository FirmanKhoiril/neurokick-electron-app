import { SetStateAction, createContext } from 'react'

export interface AppContextValue {
  isTranscript: boolean
  setIsTranscript: (value: boolean) => void
  toogleSpeakInsites: boolean
  setToogleSpeakInsites: (value: boolean) => void
  toogleNewCall: boolean
  setToogleNewCall: (value: boolean) => void
  nameCall: string
  searchConversation: string
  speakAnalysisId: string
  setIsSignup: (value: boolean) => void
  isSignup: boolean
  showPassword: boolean
  isAuth: boolean
  setShowPassword: (value: boolean) => void
  setIsAuth: (value: boolean) => void
  setSpeakAnalysisId: React.Dispatch<SetStateAction<string>>
  setNameCall: React.Dispatch<SetStateAction<string>>
  setSearchConversation: React.Dispatch<SetStateAction<string>>
}

export const StateContext = createContext<AppContextValue>({
  isTranscript: false,
  setIsTranscript: () => {},
  setIsSignup: () => {},
  isAuth: false,
  setIsAuth: () => {},
  isSignup: false,
  showPassword: false,
  setShowPassword: () => {},
  toogleSpeakInsites: true,
  setToogleSpeakInsites: () => {},
  toogleNewCall: false,
  setSpeakAnalysisId: () => {},
  speakAnalysisId: '',
  setToogleNewCall: () => {},
  nameCall: '',
  setNameCall: () => {},
  searchConversation: '',
  setSearchConversation: () => {}
})
