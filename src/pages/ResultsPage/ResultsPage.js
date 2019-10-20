import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import StatusText from '../../components/StatusText';
import './ResultsPage.css';

function ResultsPage({ questions, totalQuestions, answers }) {
  const [correctAnswers, setCorrectAnswers] = useState([]);

  // As soon as this component renders calculate and set the score
  useEffect(() => {
    const correctAnswers = answers.filter(answer => answer === true);
    setCorrectAnswers(correctAnswers)
  }, [])

  return (
    <React.Fragment>
      <StatusText
        statusNotice="You score"
        firstValue={correctAnswers.length}
        secondValue={totalQuestions}
      />
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
        className="app-link"
        to="/"
      >
        Try again
      </Link>
    </React.Fragment>
  );
}

export default ResultsPage;
