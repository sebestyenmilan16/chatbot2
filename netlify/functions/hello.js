export default async function(req) {
    console.log('/.netlify/functions/hello req', req);
    return new Response('TODO')
}