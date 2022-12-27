import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { defaultTheme } from "./styles/themes/default"

function App() {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </QueryClientProvider >
    </ThemeProvider>
  )
}

export default App
