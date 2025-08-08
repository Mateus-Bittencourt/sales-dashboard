import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AppThemeProvider } from '@contexts/AppThemeContext.tsx'
import { GlobalStyle } from '@styles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </StrictMode>
)
