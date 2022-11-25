import { Quiz } from "./../schema/schema";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
export async function create_quiz(quiz: Quiz) {
  let id;
  try {
    const docRef = await addDoc(collection(db, "quizzes"), quiz);
    id = docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return id;
}
