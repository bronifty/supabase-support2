import { useLoaderData, useActionData, redirect, Form } from "react-router-dom";
import supabase from "../../supabase";

export async function action({ request, params }) {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    console.log("User:", user);
    const response = await fetch("http://localhost:54321/functions/v1/cors", {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0`,
        // Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
      },
      body: JSON.stringify({ name: user.email }),
    });
    const data = await response.json();
    console.log("Fetch data:", data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function loader() {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      throw redirect("/");
    }
    return data.user;
  } catch (error) {
    console.error(error);
    throw redirect("/");
  }
}

export default function CorsEdgeFunctionLocal() {
  // const user = useLoaderData();
  const corsUser = useActionData();
  console.log(
    `in CorsEdgeFunctionLocal: corsUser ${JSON.stringify(corsUser, null, 2)}`
  );

  return corsUser ? (
    <>
      <h3> {JSON.stringify(corsUser, null, 2)} </h3>
      <p>- from local cors edge function</p>
      {/* <pre>{JSON.stringify(corsUser.email, null, 2)}</pre> */}
    </>
  ) : (
    <>
      <h2>CorsEdgeFunctionLocal</h2>
      {/* <div>{JSON.stringify(user, null, 2)}</div> */}
      <Form method="post">
        <button>Get Logged In User From Edge Function</button>
      </Form>
    </>
  );
}
