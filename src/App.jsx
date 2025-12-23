import { useState } from 'react'
import './App.css'
import { Output } from './components/Output'
import { Mode } from './components/Mod'

function App() {
   const [mode,setMode] = useState(null)
  return (
    <>
      <div>
       <Mode mode={mode} setMode={setMode}/>
        <Output mode={mode}></Output>
      </div>
    </>
  )
}

export default App
