export default async function(req) {
    console.log('/.netlify/functions/hello req', req);
    return new Response(
        JSON.stringify({
            message: 'Hello world!'
        }),
        {status: 200, statusText: 'OK'}
    )


}


