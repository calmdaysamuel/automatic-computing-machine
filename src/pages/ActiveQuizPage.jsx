import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { get_quiz } from "../api/get_quiz.ts";
import { get_trivia_api_quiz } from "../api/get_trivia_api_quiz.js";
import { save_score } from "../api/save_score.ts";
import { set_highscore } from "../api/set_highscore.ts";
import { Header } from "../components/Header";
import "./ActiveQuizPage.css";
export function ActiveQuizPage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const { quizId } = useParams();

  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState(null);

  const [supportedHighscore, setSupportedHighscore] = useState(true);
  const [quiz, setQuiz] = useState({
    questions: [{ question: "", options: [""] }],
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    async function call() {
      let q = await get_quiz(quizId);
      if (q == null) {
        q = await get_trivia_api_quiz(quizId);
        setSupportedHighscore(false);
      }
      setQuiz(q);

      setChoices(new Array(q.questions.length).fill(null));
    }
    call();
  }, []);

  let nextQuestion = async () => {
    if (selected == quiz.questions[currentQuestion].answer) {
      choices[currentQuestion] = true;
      setScore(score + 1);
    } else {
      choices[currentQuestion] = false;
    }
    setChoices([...choices]);
    setSelected(null);
    if (currentQuestion + 1 == quiz.questions.length) {
      let scoreId = await save_score({
        choices: choices,
        quizId: quizId,
        quizName: quiz.name,
        score: score * 10,
        time: "0",
        userName: "Samuel Calmday",
      });

      if (score * 10 > quiz.highscore && supportedHighscore) {
        await set_highscore(quizId, score * 10);
      }
      navigate(`/summary/${scoreId}`);
    } else {
      setCurrentQuestion((currentQuestion) => {
        return currentQuestion + 1;
      });
    }
  };
  return (
    <div className="acp">
      <Header></Header>
      <div className="quiz">
        <div className="progess">
          <div className="qname">{quiz.name}</div>

          <div className="choices">
            {choices.map((val, idx) => {
              if (val == null) {
                return <div className="choice"></div>;
              }
              if (val == true) {
                return (
                  <div
                    className="choice"
                    style={{ backgroundColor: "green" }}
                  ></div>
                );
              }
              return (
                <div
                  className="choice"
                  style={{ backgroundColor: "red" }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="qcount">
          Question {currentQuestion + 1} / {quiz.questions.length}
        </div>
        <div className="question">
          {quiz.questions[currentQuestion].question}
        </div>

        <div className="options">
          {quiz.questions[currentQuestion].options.map((val, index) => {
            if (selected === index) {
              return (
                <div
                  className="option"
                  key={index}
                  style={{ backgroundColor: "green" }}
                >
                  {val}
                </div>
              );
            }
            return (
              <div
                className="option"
                key={index}
                onClick={() => {
                  setSelected(index);
                }}
              >
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
