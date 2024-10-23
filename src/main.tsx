import { CssVarsProvider, CssBaseline, GlobalStyles } from '@mui/joy'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import './index.css'
import App from './App.tsx'
import { client } from './utils/apollo';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider
      defaultMode='dark'
      disableTransitionOnChange
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </CssVarsProvider>
  </StrictMode>,
)
