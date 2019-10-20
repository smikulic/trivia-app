import React from 'react';
import { useParams } from "react-router-dom";
import './QuizPage.css';

function QuizPage({ questions, totalQuestions, handleOnAnswer }) {
  const { questionId } = useParams();
  const currentQuestion = parseInt(questionId, 10);
  const nextQuestion = currentQuestion + 1;
  const question = questions[currentQuestion - 1];

  console.log(question)

  return (
    <div className="QuizPage">
      <header className="QuizPage-header">
        <div className="QuizPage-question-section">
          <h1>{question.category}</h1>
          <h3>{question.question}</h3>
        </div>
        <div className="QuizPage-button-answers-section">
          <div
            className="QuizPage-button-answer true"
            onClick={() => handleOnAnswer('True' === question.correct_answer, nextQuestion)}
          >
            True
          </div>
          <div
            className="QuizPage-button-answer false"
            onClick={() => handleOnAnswer('False' === question.correct_answer, nextQuestion)}
          >
            False
          </div>
        </div>
        <h4>Question {currentQuestion} / {totalQuestions}</h4>
      </header>
    </div>
  );
}

export default QuizPage;
