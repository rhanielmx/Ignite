import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* <CyclesContextProvider> */}
          <Router />
        {/* </CyclesContextProvider> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
