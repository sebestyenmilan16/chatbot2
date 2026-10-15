export default async function (req) {

    console.log('/.netlify/functions/ask req', req);

    const {question} = req.body

    try {
            const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearr ${"TODO"}`,
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
        }
        catch (error) {
            console.warn(error)            
        }

     return new Response(
        JSON.stringify({
            message: 'Hello world!'
        }),
        {status: 200, statusText: 'OK'}
    )
    
} 