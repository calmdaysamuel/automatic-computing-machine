import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function get_score(id: string) {
  const snap = await getDoc(doc(db, "scores", id));

  if (snap.exists()) {
    return { id: snap.id, ...snap.data() };
  } else {
    return null;
  }
}
