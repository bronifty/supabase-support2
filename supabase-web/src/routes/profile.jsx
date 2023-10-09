import { useLoaderData, useActionData, redirect, Form } from "react-router-dom";
import supabase from "../../supabase";

export async function action({ request, params }) {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    console.log(`in Profile action: user ${JSON.stringify(user, null, 2)}`);

    // const { data, error } = await supabase.functions.invoke("cors", {
    //   method: "POST",
    //   body: { name: user.email },
    // });
    console.log("Edge function response:", user);
    return user;
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

export default function Profile() {
  const user = useLoaderData();
  const corsUser = useActionData();
  return corsUser ? (
    <>
      <pre>{JSON.stringify(corsUser.email, null, 2)}</pre>
    </>
  ) : (
    <>
      <div>User Profile</div>
      <div>{JSON.stringify(user, null, 2)}</div>
      <Form method="post">
        <button>Submit</button>
      </Form>
    </>
  );
}
