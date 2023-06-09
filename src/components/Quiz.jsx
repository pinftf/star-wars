/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './Quiz.css';
import FrontPage from './FrontPage';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const questions = [
    {
      question: "Who is Luke Skywalker's father?",
      options: ['Darth Vader', 'Obi-Wan Kenobi', 'Han Solo'],
      answer: 'Darth Vader',
    },
    {
      question: "What is the name of Han Solo's ship?",
      options: ['Star Destroyer', 'X-wing', 'Millennium Falcon'],
      answer: 'Millennium Falcon',
    },
    {
      question: "Who is Princess Leia's brother?",
      options: ['Chewbacca', 'Luke Skywalker', 'Lando Calrissian'],
      answer: 'Luke Skywalker',
    },
    // Add more questions here...
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {quizStarted ? (
        showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}!
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                Question {currentQuestion + 1}/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      ) : (
        <FrontPage onStartQuiz={handleStartQuiz} />
      )}
    </div>
  );
}

export default Quiz;
