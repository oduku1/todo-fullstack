import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(()=>{
    async function test(){
      const response = await fetch("http://localhost:8080/")
     const result = await response.json()
     console.log(result)
    }
    test()
  },[])
  return (
    <>
    
    </>
  )
}

export default App
