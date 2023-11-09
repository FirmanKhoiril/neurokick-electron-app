import { InputSpeaking, Model, Navbar, Sidebar, SpeakingInsites } from './components'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, Login, Profile, Setting, Speaking } from './pages'
import { useGlobalState } from './context/ContextApi'
import { Toaster } from 'sonner'

function App(): JSX.Element {
  const isAuth = true

  const { toogleSpeakInsites, toogleNewCall } = useGlobalState()
  const location = useLocation()

  if (!isAuth) return <Login />

  return (
    <main className="flex ">
      <Toaster richColors position="top-center" />
      <Sidebar />
      <div className="w-full relative h-screen justify-between flex flex-col">
        {toogleSpeakInsites ? <SpeakingInsites /> : ''}
        {toogleNewCall ? <Model /> : ''}
        <div className="flex flex-col gap-2">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Login />} />
            <Route path="/conversation" element={<Speaking />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {location.pathname === '/conversation' && <InputSpeaking />}
      </div>
    </main>
  )
}

export default App
