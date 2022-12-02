import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
export async function sign_in_with_google() {
  let ud = await signInWithPopup(auth, new GoogleAuthProvider());
}
