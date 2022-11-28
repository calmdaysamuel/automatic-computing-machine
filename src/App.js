import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { CreateQuizPage } from "./pages/CreateQuizPage";
import { TopicsPage } from "./pages/TopicsPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { ActiveQuizPage } from "./pages/ActiveQuizPage";
import { QuizSummary } from "./pages/QuizSummary";

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
      path: "/quiz/:quizId",
      element: <ActiveQuizPage />,
    },
    {
      path: "/summary/:id",
      element: <QuizSummary />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
