import React from 'react';
import {
  Link,
  useParams,
} from "react-router-dom";
import './QuizPage.css';

function QuizPage({ lastStep }) {
  const { stepId } = useParams();
  const nextStep = parseInt(stepId, 10) + 1;

  return (
    <div className="QuizPage">
      <header className="QuizPage-header">
        <h1>
          Welcome to the Quiz!
        </h1>
        { nextStep === lastStep ? (
          <Link
            className="HomePage-link"
            to="/quiz/results"
          >
            Finish
          </Link>
        ) : (
          <Link
            className="HomePage-link"
            to={`/quiz/step/${nextStep}`}
          >
            Next
          </Link>
        )}
      </header>
    </div>
  );
}

export default QuizPage;
