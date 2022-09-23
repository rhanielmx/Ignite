import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Navbar } from './components/Navbar'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
