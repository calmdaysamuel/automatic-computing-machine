import { Header } from "../components/Header";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./CreateQuizPage.css";
import { create_quiz } from "../api/create_quiz.ts";
export function CreateQuizPage() {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState({
    name: "",
    questions: [
      {
        question: "",
        options: ["", "", "", ""],
        answer: 0,
      },
    ],
    highscore: 0,
  });

  let addQuestion = () => {
    quiz.questions.push({
      question: "",
      options: ["", "", "", ""],
      answer: 0,
    });
    setQuiz({ ...quiz });
  };
  let setTitle = (event) => {
    quiz.name = event.target.value;

    setQuiz({ ...quiz });
  };

  let saveQuiz = async () => {
    await create_quiz(quiz);
    navigate("/home");
  };

  console.log(quiz);
  return (
    <div className="cqp">
      <Header></Header>
      <div className="cont">
        <input
          type="text"
          className="quiz-name"
          onChange={setTitle}
          placeholder="Enter the name of this quiz . . ."
        />

        {quiz.questions.map((question, qindex) => {
          return (
            <div className="question" key={qindex}>
              <input
                type="text"
                className="q-q"
                placeholder={"Enter Question " + (qindex + 1)}
                value={question.question}
                onChange={(event) => {
                  quiz.questions[qindex].question = event.target.value;
                  setQuiz({ ...quiz });
                }}
              />
              <div className="options">
                {question.options.map((option, index) => {
                  return (
                    <input
                      type="text"
                      className="option"
                      value={option}
                      onChange={(event) => {
                        quiz.questions[qindex].options[index] =
                          event.target.value;
                        setQuiz({ ...quiz });
                      }}
                      placeholder={
                        index === 0
                          ? "Enter correct answer here"
                          : "Enter Option " + (index + 1)
                      }
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="next" onClick={addQuestion}>
          Add Question
        </div>
        <div className="next" onClick={saveQuiz}>
          Save Quiz
        </div>
      </div>
    </div>
  );
}
