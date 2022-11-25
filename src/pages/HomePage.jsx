import { Header } from "../components/Header";
import "./HomePage.css";
export function HomePage() {
  const quizzes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="hp">
      <Header></Header>
      <div className="quizzes">
        {quizzes.map((a) => {
          return (
            <div className="quiz">
              <div className="title">Fruit Trivia</div>
              <div className="count">5 questions</div>
              <div className="start-btn">Play</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
