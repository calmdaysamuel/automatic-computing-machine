import { Header } from "../components/Header";
import "./TopicsPage.css";
export function TopicsPage() {
  const options = [
    {
      label: "Arts and Literature",
      route: "arts_and_literature",
    },
    {
      label: "Film and TV",
      route: "film_and_tv",
    },
    {
      label: "Food and Drink",
      route: "food_and_drink",
    },
    {
      label: "General Knowledge",
      route: "general_knowledge",
    },
    {
      label: "Geography",
      route: "geography",
    },
    {
      label: "History",
      route: "history",
    },
    {
      label: "Music",
      route: "music",
    },
    {
      label: "Science",
      route: "science",
    },
    {
      label: "Society and Culture",
      route: "society_and_culture",
    },
    {
      label: "Sport and Leisure",
      route: "sport_and_leisure",
    },
  ];
  return (
    <div className="hp">
      <Header></Header>

      <div className="optionsq">
        <h2>Play Random Quizzes, powered by the-trivia-api.com</h2>
        {options.map((option) => {
          return (
            <a className="option" href={"/quiz/" + option.route}>
              {option.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
