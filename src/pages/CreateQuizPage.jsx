import { Header } from "../components/Header";
import { useState } from "react";
import "./CreateQuizPage.css";
import { create_quiz } from "../api/create_quiz.ts";
export function CreateQuizPage() {
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

  let saveQuiz = () => {
    create_quiz(quiz);
  };
  return (
    <div className="cqp">
      <Header></Header>
      <div className="cont">
        <input
          type="text"
          className="quiz-name"
          placeholder="Enter the name of this quiz . . ."
        />

        {quiz.questions.map((question, index) => {
          console.log(question);
          return (
            <div className="question" key={index}>
              <input
                type="text"
                className="q-q"
                placeholder={"Enter Question " + (index + 1)}
              />
              <div className="options">
                {question.options.map((option, index) => {
                  return (
                    <input
                      type="text"
                      className="option"
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
        <a className="next" href="/home" onClick={saveQuiz}>
          Save Quiz
        </a>
      </div>
    </div>
  );
}
