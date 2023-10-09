import supabase from "../../supabase";
import { Form, useLoaderData, redirect } from "react-router-dom";

export async function action({ request, params }) {
  await supabase.auth.signOut();
  // return redirect("/");
  return (window.location.href = "/");
}
export async function loader() {
  return null;
}

export default function SignOut() {
  return (
    <>
      <Form method="post">
        <button>SignOut</button>
      </Form>
    </>
  );
}
