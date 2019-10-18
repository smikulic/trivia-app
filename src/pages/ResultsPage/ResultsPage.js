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
        { questions && questions.map((question, key) => {
          return <div key={key}>{question.question} / {answers[key].toString()}</div>
        })}
        <Link
          className="ResultsPage-link"
          to="/quiz/step/1"
        >
          Try again
        </Link>
      </header>
    </div>
  );
}

export default ResultsPage;
