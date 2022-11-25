import logo from "./logo.svg";
import "./App.css";
import { get_all_topics } from "./api/get_all_topics.ts";
import { get_all_quizzes } from "./api/get_all_quizzes.ts";
import { create_quiz } from "./api/create_quiz.ts";
import { save_score } from "./api/save_score.ts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
