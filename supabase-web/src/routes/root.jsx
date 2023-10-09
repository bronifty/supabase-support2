import { Outlet, Link, useLoaderData, redirect } from "react-router-dom";
import supabase from "../../supabase";
import { router } from "../main";

export async function action({ request, params }) {
  return redirect("/");
}

export async function loader() {
  let { data: unAuthenticatedData, error: unAuthError } = await supabase
    .from("unauthenticated_table")
    .select();
  let { data: authenticatedData, error: authError } = await supabase
    .from("authenticated_table")
    .select();
  let {
    data: { user },
  } = await supabase.auth.getUser();
  return { unAuthenticatedData, authenticatedData, user };
}

export default function Root() {
  const { unAuthenticatedData, authenticatedData, user } = useLoaderData();
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        {router.routes[0].children.map((item) => (
          <li key={item.path}>
            {/* <a href={item.path}>{item.path}</a> */}
            <Link to={item.path}>{item.path}</Link>
          </li>
        ))}
      </ul>
      {user ? (
        <>
          <div>authenticatedData</div>
          <div>{JSON.stringify(authenticatedData, null, 2)}</div>
        </>
      ) : (
        <>
          <h1>Index UnAuthenticated</h1>
          <div>{JSON.stringify(unAuthenticatedData, null, 2)}</div>
        </>
      )}
      <Outlet />
    </>
  );
}
