import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './ResultsPage.css';

function ResultsPage({ questions, totalQuestions, answers }) {
  const [correctAnswers, setCorrectAnswers] = useState([]);


  useEffect(() => {
    const correctAnswers = answers.filter(answer => answer === true);

    setCorrectAnswers(correctAnswers)
  }, [])

  console.log(correctAnswers)

  return (
    <div className="ResultsPage">
      <header className="ResultsPage-header">
        <h1>
          You score {correctAnswers.length} / {totalQuestions}
        </h1>
        <div className="ResultsPage-questions-section">
          { questions && questions.map((question, key) => {
            const correctlyAnsweredQuestion = answers[key];
            return (
              <div
                className={`ResultsPage-question ${correctlyAnsweredQuestion ? 'correct' : 'incorrect'}`}
                key={key}
              >
                {question.question}
              </div>
            );
          })}
        </div>
        <Link
          className="ResultsPage-link"
          to="/"
        >
          Try again
        </Link>
      </header>
    </div>
  );
}

export default ResultsPage;
