import React from 'react';
import { useParams } from "react-router-dom";
import ButtonAnswer from '../../components/ButtonAnswer';
import StatusText from '../../components/StatusText';
import { IQuestion } from '../../types';
import './QuizPage.css';

interface IQuizPageProps {
  questionId: string,
  questions: IQuestion[],
  totalQuestions: number,
  handleOnAnswer: (arg1: boolean, arg2: number) => void,
}

function QuizPage({ questions, totalQuestions, handleOnAnswer }: IQuizPageProps) {
  const { questionId } = useParams();
  const currentQuestion = questionId ? parseInt(questionId, 10) : 0;
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
