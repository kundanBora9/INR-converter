import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
  style={{backgroundImage:`url(https://plus.unsplash.com/premium_photo-1681437744904-d815bc19c2f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>

  </div>
  )
}

export default App
