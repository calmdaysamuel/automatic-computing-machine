import { useEffect, useState } from "react";
import { get_all_quizzes } from "../api/get_all_quizzes.ts";
import { Header } from "../components/Header";
import "./HomePage.css";
export function HomePage() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function call() {
      let q = await get_all_quizzes();

      setQuizzes([...q]);
    }
    call();
  }, []);

  return (
    <div className="hp">
      <Header></Header>
      <div className="quizzes">
        {quizzes.map((a) => (
          <div className="quiz">
            <div className="title">{a.name}</div>
            <div className="count">{a.questions.length + " questions"}</div>
            <a className="start-btn" href={"/quiz/" + a.id}>
              Play
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
