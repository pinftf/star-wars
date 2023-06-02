/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import QuizLogo from '../images/Quiz.png';
import './FrontPage.css';

function FrontPage({ onStartQuiz }) {
  return (
    <div className="front-page">
      <img src={QuizLogo} alt="StarWars" className="front-page-image" />
      <button onClick={onStartQuiz} className="start-quiz-button">
        Start
      </button>
    </div>
  );
}

export default FrontPage;
