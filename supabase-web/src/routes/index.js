// src/routes/index.js
export {
  default as Root,
  loader as RootLoader,
  action as RootAction,
} from "./root";
export {
  default as SignInWithEmailPassword,
  loader as SignInWithEmailPasswordLoader,
  action as SignInWithEmailPasswordAction,
} from "./signInWithEmailPassword";
export {
  default as SignUpWithEmailPassword,
  loader as SignUpWithEmailPasswordLoader,
  action as SignUpWithEmailPasswordAction,
} from "./signUpWithEmailPassword";
export {
  default as SignInWithOTPEmail,
  loader as SignInWithOTPEmailLoader,
  action as SignInWithOTPEmailAction,
} from "./signInWithOTPEmail";
export {
  default as Profile,
  loader as ProfileLoader,
  action as ProfileAction,
} from "./profile";
export {
  default as SignOut,
  loader as SignOutLoader,
  action as SignOutAction,
} from "./signOut";
export {
  default as CorsEdgeFunction,
  loader as CorsEdgeFunctionLoader,
  action as CorsEdgeFunctionAction,
} from "./corsEdgeFunction";
export {
  default as CorsEdgeFunction2,
  loader as CorsEdgeFunctionLoader2,
  action as CorsEdgeFunctionAction2,
} from "./corsEdgeFunction2";
export {
  default as CorsEdgeFunctionLocal,
  loader as CorsEdgeFunctionLocalLoader,
  action as CorsEdgeFunctionLocalAction,
} from "./corsEdgeFunctionLocal";
