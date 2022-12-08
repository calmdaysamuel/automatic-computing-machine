export async function get_trivia_api_quiz(category) {
  const response = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${category}&limit=10`
  );

  let quiz = { id: category, name: "", highscore: "0", questions: [] };
  let data = await response.json();
  for (let i of data) {
    quiz.name = i.category;

    quiz.questions.push({
      answer: 0,
      options: [i.correctAnswer, ...i.incorrectAnswers],
      question: i.question,
    });
  }
  return quiz;
}
