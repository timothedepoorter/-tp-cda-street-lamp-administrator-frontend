import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useData } from "./hooks/useData"

function App() {
  const { lampadaires, utilisateurs, horaires, capteurs, error } = useData();
  console.log(lampadaires)

  return (
    <>
      <div><h1>Hello world from eclairage-front!</h1></div>

      <p>{error ? '❌ ' + error: 'No errors ✅'}</p>
    </>
  )
}

export default App
