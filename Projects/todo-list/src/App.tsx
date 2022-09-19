import { useState } from 'react'
import './global.css'

import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Tasks/>
    </div>
  )
}

export default App
