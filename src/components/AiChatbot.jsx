import { useState } from 'react'
import './AiChatbot.css'
import { SlArrowRightCircle } from 'react-icons/sl'

export default function AiChatbot(props) {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [conservation, setConservation] = useState([])

    const handleAskButtonClick = async () => {
        console.log('handleAskButtonClick question', question);

        // Send question to Groq
        const res = await fetch('https://chat-sm.netlify.app/.netlify/functions/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Question': question
            },
            body: JSON.stringify({question})
        })
        
        if (res.ok) {
            const message = await res.json()
            console.log('message', message);
            setAnswer(message?.answer || "Teszt válasz")
        }

    }

    const handleInputChange = (e) => {
        setQuestion(e?.target.value)
    }

    const handleKeyPress = (e) => {
        //console.log('handleKeyPress', e.key)
        if (e?.key == 'Enter') {
            handleAskButtonClick()
        }
    }

    return <div onKeyDown={handleKeyPress}>
        <h1>AI Chat</h1>
        <div className='conversationarea'>
            No messages yet ...
            <p>{question}</p> 
            <p>{answer}</p> 
        </div>

        <div>
            <input value={question} type="text" placeholder='Ask anything...' onChange={handleInputChange}/>
            <button  onClick={handleAskButtonClick} ><SlArrowRightCircle /></button>
        </div>

    </div>
}