import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { get_all_scores } from "../api/get_all_scores.ts";
import "./LeaderboardPage.css";
export function LeaderboardPage() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function call() {
      setScores(await get_all_scores());
    }

    call();
  }, scores);

  return (
    <div className="lb">
      <Header></Header>

      <table className="scores">
        <tr className="score">
          <th className="uname">Username</th>

          <th className="qname">Quiz Name</th>
          <th className="hscore">Score</th>
        </tr>
        {scores.map((score, index) => {
          return (
            <tr className="score">
              <td className="uname">{score.userName}</td>

              <td className="qname">{score.quizName}</td>
              <td className="hscore">{score.score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
