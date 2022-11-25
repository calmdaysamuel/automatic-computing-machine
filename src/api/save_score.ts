import { GameSnapshot, Quiz } from "./../schema/schema";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
export async function save_score(gameSnapshot: GameSnapshot) {
  let id;
  try {
    const docRef = await addDoc(collection(db, "scores"), gameSnapshot);
    id = docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return id;
}
