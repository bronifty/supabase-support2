// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// import { serve } from 'std/server'
import { corsHeaders } from '../_shared/cors.ts'

console.log(`Function "browser-with-cors" up and running!`)
import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

console.log("Hello from Functions!");

serve(async (req) => {
        console.log(req.method)
        if (req.method === 'OPTIONS') {
            return new Response(
                'ok',
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Expose-Headers": "Content-Length, X-JSON",
                        "Access-Control-Allow-Headers": "apikey,X-Client-Info, Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
                    }
                }
            );
        }
        else {
            const jsonData = await req.json();
            const name = jsonData.name;
            const data = {message: `Hello there ${name}!`};
            return new Response(
                JSON.stringify(data),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Expose-Headers": "Content-Length, X-JSON",
                        "Access-Control-Allow-Headers": "apikey,X-Client-Info, Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
                    }
                }
            );
        }
});
// Deno.serve(async (req) => {
//   // This is needed if you're planning to invoke your function from a browser.
//   if (req.method === 'OPTIONS') {
//     return new Response('ok', { headers: corsHeaders })
//   }

//   try {
//     const { name } = await req.json()
//     const data = {
//       message: `Hello ${name}!`,
//     }

//     return new Response(JSON.stringify(data), {
//       headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//       status: 200,
//     })
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//       status: 400,
//     })
//   }
// })

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/cors' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
