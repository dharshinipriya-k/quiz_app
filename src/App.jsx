import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const questions = [
    {
      question:
        "Which of the following is used in React.js to increase performance?",
      options: [
        { answer: "Virtual Dom", isCorrect: true },
        { answer: "Real Dom", isCorrect: false },
        { answer: "Both A and B", isCorrect: false },
        { answer: "None of the above", isCorrect: false },
      ],
    },
    {
      question: "What is ReactJS?",
      options: [
        { answer: "Server side framework", isCorrect: false },
        { answer: "User Interface framework ", isCorrect: true },
        { answer: "Both A and B", isCorrect: false },
        { answer: "None of the above", isCorrect: false },
      ],
    },
    {
      question: "In which language is React.js written?",
      options: [
        { answer: "Python", isCorrect: false },
        { answer: "Javascript ", isCorrect: true },
        { answer: "Java", isCorrect: false },
        { answer: "PHP", isCorrect: false },
      ],
    },
    {
      question: "Who created React.js",
      options: [
        { answer: "Jordan Mike", isCorrect: false },
        { answer: "Jordan Walke ", isCorrect: true },
        { answer: "Tim Lee", isCorrect: false },
        { answer: "Jordan Lee", isCorrect: false },
      ],
    },
    {
      question: "What is Babel?",
      options: [
        { answer: "Javascript compiler", isCorrect: false },
        { answer: "Javascript interpreter ", isCorrect: true },
        { answer: "Javascript transpiler", isCorrect: false },
        { answer: "None of the above", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <h1>Welcome to React Quiz</h1>
      <h4>Test your knowledge on react..! Happy quizzing...!!🧩</h4>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <br />
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>

              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].options.map((e) => (
                <Button
                  className="button"
                  onClick={() => handleAnswerClick(e.isCorrect)}
                >
                  {e.answer}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>

     
    </>
  );
}

export default App;
