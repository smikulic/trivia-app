import React, { useState, useEffect } from 'react';
import StatusText from '../../components/StatusText';
import { FaCheck, FaMinus } from 'react-icons/fa';
import { IQuestion } from '../../types';
import { decodeHtml } from '../../utils/formatter';
import './ResultsPage.css';

interface IResultsPageProps {
  questions: IQuestion[],
  totalQuestions: number,
  answers: any, // this needs to be boolean[] but there is an issues with TS and initial never[] state.
  handleOnRestart: () => void,
}

function ResultsPage({ questions, totalQuestions, answers, handleOnRestart }: IResultsPageProps) {
  const [correctAnswers, setCorrectAnswers] = useState([]);

  // As soon as this component renders calculate and set the score
  useEffect(() => {
    const correctAnswers = answers.filter((answer: boolean) => answer === true);
    setCorrectAnswers(correctAnswers)
  }, [])

  return (
    <React.Fragment>
      <div className="ResultsPage-score-section">
        <StatusText
          statusNotice="You score"
          firstValue={correctAnswers.length}
          secondValue={totalQuestions}
        />
        <h4>{correctAnswers.length / totalQuestions * 100}%</h4>
      </div>
      <div className="ResultsPage-questions-section">
        Score details: 
        { questions && questions.map((question, key) => {
          const correctlyAnsweredQuestion = answers[key];
          return (
            <div
              className={`ResultsPage-question ${correctlyAnsweredQuestion ? 'correct' : 'incorrect'}`}
              key={key}
            >
              {correctlyAnsweredQuestion ? <FaCheck /> : <FaMinus />}
              {' '}
              {decodeHtml(question.question)}
            </div>
          );
        })}
      </div>
      <div
        className="app-link"
        onClick={() => handleOnRestart()}
      >
        Try again
      </div>
    </React.Fragment>
  );
}

export default ResultsPage;
