import logo from "./logo.svg";
import "./App.css";
import { get_all_topics } from "./api/get_all_topics.ts";
import { get_all_quizzes } from "./api/get_all_quizzes.ts";
import { create_quiz } from "./api/create_quiz.ts";
import { save_score } from "./api/save_score.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { CreateQuizPage } from "./pages/CreateQuizPage";
import { TopicsPage } from "./pages/TopicsPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { ActiveQuizPage } from "./pages/ActiveQuizPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/create-quiz",
      element: <CreateQuizPage />,
    },
    {
      path: "/leaderboard",
      element: <LeaderboardPage />,
    },
    {
      path: "/topics",
      element: <TopicsPage />,
    },
    {
      path: "/quiz",
      element: <ActiveQuizPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
