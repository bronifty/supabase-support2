import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import {
  Root,
  RootAction,
  RootLoader,
  SignInWithEmailPassword,
  SignInWithEmailPasswordAction,
  SignInWithEmailPasswordLoader,
  SignUpWithEmailPassword,
  SignUpWithEmailPasswordAction,
  SignUpWithEmailPasswordLoader,
  SignInWithOTPEmail,
  SignInWithOTPEmailAction,
  SignInWithOTPEmailLoader,
  Profile,
  ProfileAction,
  ProfileLoader,
  SignOut,
  SignOutAction,
  SignOutLoader,
  CorsEdgeFunction,
  CorsEdgeFunctionAction,
  CorsEdgeFunctionLoader,
  CorsEdgeFunction2,
  CorsEdgeFunctionAction2,
  CorsEdgeFunctionLoader2,
  CorsEdgeFunctionLocal,
  CorsEdgeFunctionLocalAction,
  CorsEdgeFunctionLocalLoader,
} from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    action: RootAction,
    loader: RootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signInWithEmailPassword",
        element: <SignInWithEmailPassword />,
        action: SignInWithEmailPasswordAction,
        loader: SignInWithEmailPasswordLoader,
      },
      {
        path: "/signUpWithEmailPassword",
        element: <SignUpWithEmailPassword />,
        action: SignUpWithEmailPasswordAction,
        loader: SignUpWithEmailPasswordLoader,
      },
      {
        path: "/signInWithOTPEmail",
        element: <SignInWithOTPEmail />,
        action: SignInWithOTPEmailAction,
        loader: SignInWithOTPEmailLoader,
      },
      {
        path: "/signOut",
        element: <SignOut />,
        action: SignOutAction,
        loader: SignOutLoader,
      },
      {
        path: "/profile",
        element: <Profile />,
        action: ProfileAction,
        loader: ProfileLoader,
      },
      {
        path: "/corsEdgeFunction",
        element: <CorsEdgeFunction />,
        action: CorsEdgeFunctionAction,
        loader: CorsEdgeFunctionLoader,
      },
      {
        path: "/corsEdgeFunction2",
        element: <CorsEdgeFunction2 />,
        action: CorsEdgeFunctionAction2,
        loader: CorsEdgeFunctionLoader2,
      },
      {
        path: "/corsEdgeFunctionLocal",
        element: <CorsEdgeFunctionLocal />,
        action: CorsEdgeFunctionLocalAction,
        loader: CorsEdgeFunctionLocalLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
