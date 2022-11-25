import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function set_highscore(quiz_id: string, score: number) {
  const quizRef = doc(db, "quizzes", quiz_id);

  let result = await updateDoc(quizRef, { highscore: score });
}
