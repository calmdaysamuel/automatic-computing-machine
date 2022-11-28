import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { get_quiz } from "../api/get_quiz.ts";
import { save_score } from "../api/save_score.ts";
import { Header } from "../components/Header";
import "./ActiveQuizPage.css";
export function ActiveQuizPage(props) {
  const navigate = useNavigate();

  const { quizId } = useParams();
  const [quiz, setQuiz] = useState({
    questions: [{ question: "", options: [""] }],
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    async function call() {
      setQuiz(await get_quiz(quizId));
    }
    call();
  }, []);

  let nextQuestion = async () => {
    if (currentQuestion + 1 == quiz.questions.length) {
      let scoreId = "aa"; //await save_score({});
      navigate(`/summary/${scoreId}`);
    } else {
      setCurrentQuestion((currentQuestion) => {
        return currentQuestion + 1;
      });
    }
  };
  console.log(quiz);
  return (
    <div className="acp">
      <Header></Header>
      <div className="quiz">
        <div className="qcount">
          Question {currentQuestion + 1} / {quiz.questions.length}
        </div>
        <div className="question">
          {quiz.questions[currentQuestion].question}
        </div>

        <div className="options">
          {quiz.questions[currentQuestion].options.map((val, index) => {
            return (
              <div className="option" key={index}>
                {" "}
                {val}
              </div>
            );
          })}
        </div>
        <div className="next" onClick={nextQuestion}>
          {currentQuestion + 1 == quiz.questions.length
            ? "See Results"
            : "Next Question"}
        </div>
      </div>
    </div>
  );
}
