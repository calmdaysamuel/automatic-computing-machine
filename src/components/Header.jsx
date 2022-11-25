import "./Header.css";
export function Header() {
  return (
    <div className="header">
      <a href="/home" className="link logo">
        Quizly
      </a>
      <div className="spacer"></div>
      <a href="/create-quiz" className="link">
        Create Quiz
      </a>
      <a href="/leaderboard" className="link">
        Leaderboard
      </a>
      <a href="/topics" className="link">
        Topics
      </a>
    </div>
  );
}
