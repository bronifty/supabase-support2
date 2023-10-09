import supabase from "../../supabase";
import { Form } from "react-router-dom";

export async function action({ request, params }) {
  try {
    let { data, error } = await supabase.auth.signInWithPassword(
      Object.fromEntries(await request.formData())
    );
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  } finally {
    return (window.location.href = "/");
  }
}
export async function loader() {
  return null;
}

export default function SignOut() {
  return (
    <>
      <Form method="post">
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">signInWithEmailPassword</button>
      </Form>
    </>
  );
}
