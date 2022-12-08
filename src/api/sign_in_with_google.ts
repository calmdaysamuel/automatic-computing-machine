import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

let user: any = null;
export async function sign_in_with_google() {
  if (user != null) {
    return user;
  }
  user = await signInWithPopup(auth, new GoogleAuthProvider());
  return user;
}
