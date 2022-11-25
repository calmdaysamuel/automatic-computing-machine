export interface Question {
  id?: String;
  question: String;
  options: String[];
  answer: number;
}

export interface Quiz {
  id?: String;

  name: String;
  questions: Question[];
  highscore: number;
}

export interface User {
  id?: String;

  name: String;
}

export interface GameSnapshot {
  userName: String;
  quizId: String;
  score: number;
  quizName: String;
}
