# Supabase Tech Support Cases

1. Auth & User Management

2. JWT Session Tokens

3. CORS Issue - Edge Function
- to run locally and troubleshoot, navigate to [supabase-edge](./supabase-edge/) and run
```sh
# make sure all docker containers are stopped and removed
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
# start the local supabase stack
npx supabase start
```
- once started you will get feedback including the endpoint and JWT key, which you will use in requests to the edge function
```sh
Started supabase local development setup.
         API URL: http://localhost:54321
     GraphQL URL: http://localhost:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
```
-  serve all functions in the [supabase/functions](./supabase-edge/supabase/functions/) directory
```sh
npx supabase functions serve
```
- test with curl using the JWT header and endpoint provided in supabase stack feedback
```sh
curl -i --location --request POST 'http://localhost:54321/functions/v1/cors2' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Functions"}'
```
- now we will migrate to the web app and test whether we are getting blocked by cors. 
```sh
cd supabase-web 
cp sample.env .env
```
- update .env with your project's url & anon key
```sh
yarn && yarn dev
```
- navigate to [supabase-web/](http://localhost:5173/)


- [supabase docs edge function troubleshooting](https://supabase.com/docs/guides/functions/troubleshooting)
- [cors issue supabase edge function example](https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/browser-with-cors/index.ts)

4. Postgres Database Performance
..