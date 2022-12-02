import { sign_in_with_google } from "../api/sign_in_with_google.ts";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  let signIn = async () => {
    let user = await sign_in_with_google();
    navigate("/home");
  };

  return (
    <div className="lp">
      <h1 className="lp-app-title">Quizly: A Trivia Game</h1>
      <p className="lp-makers">By Samuel, Kevin, Brian, Oluwasubmoni</p>
      <button className="lp-login" onClick={signIn}>
        Login
      </button>
    </div>
  );
}
