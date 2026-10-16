import { json } from "express";

export default async function (req) {

    //console.log('/.netlify/functions/ask req', req);

    let {question} = req.body
    //console.log(req.body);
    console.log();
    
    question = req.headers['x-question'] ?? req.headers.get('x-question')
    console.log('Question from headers: ', question);

    let role = null;
    let answer = null;

    try {
            const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process?.env?.GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": "openai/gpt-oss-120b",
                    "messages": [
                        {
                            "role": "user",
                            "content": question
                        }
                        ]
                })
            })
        
        //console.log('Groq Response: ', res)
    
        // TODO - parse res json

        const growResObj = await res.json()

        console.log('groqResObj', growResObj);
        
        const {choices=[]} = growResObj
        console.log('choices: ', choices);
        const message = choices[0]?.message
        console.log('message json', JSON.stringify(message))
        //const {role='assistant', content=''} = message
        role = message?.role
        //const answer = content
        answer = message?.answer
        console.log('Answer: ', answer)
        

    }

        
        catch (error) {
            console.warn(error)            
        }

     return new Response(
        JSON.stringify({
            message: 'OK',
            answer,
            role,
        }),
        {status: 200, statusText: 'OK'}
    )
    
} 