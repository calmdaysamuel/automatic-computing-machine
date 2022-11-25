import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function get_all_quizzes() {
  const querySnapshot = await getDocs(collection(db, "quizzes"));

  let quizzes: any[] = [];
  querySnapshot.forEach((doc) => {
    quizzes.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(quizzes);
  return quizzes;
}
