export const jsQuizz = {
  questions: [
    {
      question: "What does HTML stand for?",
      choices: [
        "Home Tool Markup Language",
        "Hypertext Markup Language",
        "Hyperlink and Text Management Language",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "What is ReactJS?",
      choices: [
        "Server-side framework",
        "User Interface framework",
        "Both a & b",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question: "Who created JavaScript?",
      choices: [
        "Bjarne Stroustrup",
        "James Gosling",
        "Guido van Rossum",
        "Brendan Eich",
      ],
      type: "MCQs",
      correctAnswer: "Brendan Eich",
    },
    {
      question: "In which language is React.js written?",
      choices: ["Python", "Java", "C#", "JavaScript"],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "What are hooks in ReactJS?",
      choices: [
        "Functions that allow you to use state and other React features in functional components",
        "Components that manage the state and lifecycle methods in React applications",
        "Libraries used for styling React components",
        "Both a & b",
      ],
      type: "MCQs",
      correctAnswer:
        "Functions that allow you to use state and other React features in functional components",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
