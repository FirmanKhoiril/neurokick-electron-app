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
  setSpeakAnalysisId: React.Dispatch<SetStateAction<string>>
  setNameCall: React.Dispatch<SetStateAction<string>>
  setSearchConversation: React.Dispatch<SetStateAction<string>>
}

export const StateContext = createContext<AppContextValue>({
  isTranscript: false,
  setIsTranscript: () => {},
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
