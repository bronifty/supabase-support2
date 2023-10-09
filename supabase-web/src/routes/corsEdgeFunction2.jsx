import { useLoaderData, useActionData, redirect, Form } from "react-router-dom";
import supabase from "../../supabase";

export async function action({ request, params }) {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    console.log(
      `in Cors Edge Function action: user ${JSON.stringify(user, null, 2)}`
    );

    const { data, error } = await supabase.functions.invoke("cors2", {
      method: "POST",
      body: { name: user.email },
    });
    console.log("Edge function response:", user);
    return data;
    // return user;
  } catch (error) {
    console.log(error);
  } finally {
  }
  return null;
}
export async function loader() {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      throw redirect("/");
    }
    return data.user;
  } catch (error) {
    console.log(error);
    throw redirect("/");
  }
}

export default function CorsEdgeFunction2() {
  const user = useLoaderData();
  const corsUser = useActionData();
  console.log(
    `in CorsEdgeFunction2: corsUser ${JSON.stringify(corsUser, null, 2)}`
  );

  return corsUser ? (
    <>
      <h3> {corsUser.message} </h3>
      <p>- from deployed cors edge function</p>
      {/* <pre>{JSON.stringify(corsUser.email, null, 2)}</pre> */}
    </>
  ) : (
    <>
      <h2>CorsEdgeFunction2</h2>
      {/* <div>{JSON.stringify(user, null, 2)}</div> */}
      <Form method="post">
        <button>Get Logged In User From Edge Function</button>
      </Form>
    </>
  );
}
