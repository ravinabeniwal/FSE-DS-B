import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hotel from './components/Hotel'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hotel/>  
      <Card1/>  
      <Card2/>  
      <Card3/>  
    </>
  )

}

export default App
