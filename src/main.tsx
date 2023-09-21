import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PostsProvider } from './contexts/PostsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
