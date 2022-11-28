import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_quiz } from "../api/get_quiz.ts";
import { get_score } from "../api/get_score.ts";
import { Header } from "../components/Header";
import "./QuizSummary.css";
export function QuizSummary() {
  const { id } = useParams();

  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function call() {
      let s = await get_score(id);
      let q = await get_quiz(s.quizId);

      setScore(s);
      setQuiz(q);
    }

    call();
  }, []);

  console.log(quiz, score);
  return (
    <div className="hp">
      <Header></Header>
      {quiz && (
        <div className="stats">
          <div className="qs-qname">Quiz Name: {quiz.name}</div>
          <div className="qs-name">Player Name: {score.userName}</div>
          <div className="qs-score">Your Score: {score.score}</div>
          <div className="qs-hscore">High Score: {quiz.highscore}</div>
          <div className="qs-hscore">Time Spent: {score.time}</div>
        </div>
      )}
    </div>
  );
}
