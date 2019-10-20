import React from 'react';
import { useParams } from "react-router-dom";
import ButtonAnswer from '../../components/ButtonAnswer';
import StatusText from '../../components/StatusText';
import './QuizPage.css';

function QuizPage({ questions, totalQuestions, handleOnAnswer }) {
  const { questionId } = useParams();
  const currentQuestion = parseInt(questionId, 10);
  const nextQuestion = currentQuestion + 1;
  const question = questions[currentQuestion - 1];

  return (
    <React.Fragment>
      <div className="QuizPage-question-section">
        <h1>{question.category || 'N/A'}</h1>
        <h3>{question.question}</h3>
      </div>
      <div className="QuizPage-button-answers-section">
        <ButtonAnswer
          answerValue="true"
          handleOnClick={() => handleOnAnswer('True' === question.correct_answer, nextQuestion)}
        />
        <ButtonAnswer
          answerValue="false"
          handleOnClick={() => handleOnAnswer('False' === question.correct_answer, nextQuestion)}
        />
      </div>
      <StatusText
        statusNotice="Question"
        firstValue={currentQuestion}
        secondValue={totalQuestions}
      />
    </React.Fragment>
  );
}

export default QuizPage;
