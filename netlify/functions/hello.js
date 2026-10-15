export default async function(req) {
    console.log('/.netlify/functions/hello req', req);
    return new Response(
        JSON.stringify({
            message: 'Hello worls!'
        }),
        {status: 200, statusText: 'OK'}
    )


}


