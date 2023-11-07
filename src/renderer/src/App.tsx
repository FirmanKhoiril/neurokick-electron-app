import { InputSpeaking, Navbar, Sidebar } from './components'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, Login, Profile, Setting, Speaking } from './pages'

function App(): JSX.Element {
  const location = useLocation()
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-full h-screen justify-between flex flex-col">
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
