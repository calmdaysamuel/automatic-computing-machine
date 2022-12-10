import { sign_in_with_google } from "../api/sign_in_with_google.ts";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";
export function LoginPage() {
  const navigate = useNavigate();

  let signIn = async () => {
    let user = await sign_in_with_google();
    navigate("/home");
  };

  return (
    <div className="lp">
      <img src="Logo.png" alt="Flowers in Chania"></img>
      <h2 className="lp-makers">
        By Samuel Calmday, Kevin Claiborne, Oluwasubomi Bashorun, Brian Paul
      </h2>
      <button className="lp-login" onClick={signIn}>
        Login
      </button>
    </div>
  );
}
