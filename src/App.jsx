import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //<>:react fragments
    <>
      <h1>hello world {1 + 1}</h1>
      <h2>bye world</h2>
    </>
  )
}

export default App
