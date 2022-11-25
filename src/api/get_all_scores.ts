import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function get_all_scores() {
  const querySnapshot = await getDocs(collection(db, "scores"));

  let topics: any[] = [];
  querySnapshot.forEach((doc) => {
    topics.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(topics);
  return topics;
}
