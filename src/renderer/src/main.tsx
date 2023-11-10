import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { ContextApi } from './context/ContextApi'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="291614094466-nhgad0c0hp1n81od1tbdqhhefivp4vea.apps.googleusercontent.com">
        <ContextApi>
          <App />
        </ContextApi>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
