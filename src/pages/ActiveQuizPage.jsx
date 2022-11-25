import { Header } from "../components/Header";
import "./ActiveQuizPage.css";
export function ActiveQuizPage() {
  return (
    <div className="acp">
      <Header></Header>
      <div className="quiz">
        <div className="qcount">Question 05 / 07</div>
        <div className="question">How Many Bathrooms does your home have</div>

        <div className="options">
          <div className="option"> 1 Bathroom</div>
          <div className="option"> 1 Bathroom</div>
          <div className="option"> 1 Bathroom</div>
          <div className="option"> 1 Bathroom</div>
        </div>
        <div className="next">Next Question</div>
      </div>
    </div>
  );
}
