import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [helloWorlsText, setHelloWorldText] = useState('TODO')

  const handleHelloWorldButtonClick = () => {
    fetch(`https://chat-sm.netlify.app/.netlify/functions/hello`)
    .then( (res => res.json() ) )
    .then( res => setHelloWorldText(res.message) )
    .catch(console.warn)
  }

  return (
    <>
      <AiChatbot />
    </>
  )
}

export default App
