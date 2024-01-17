import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { NotesProvider } from './hooks/notes';


const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <NotesProvider>
          <Routes />
        </NotesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
