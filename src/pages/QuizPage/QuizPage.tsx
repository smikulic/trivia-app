import React from 'react';
import { useParams } from "react-router-dom";
import ButtonAnswer from '../../components/ButtonAnswer';
import StatusText from '../../components/StatusText';
import ProgressBar from '../../components/ProgressBar';
import { IQuestion } from '../../types';
import { decodeHtml } from '../../utils/formatter';
import './QuizPage.css';
import Pagination from '../../components/Pagination';

interface IQuizPageProps {
  questionId: string,
  questions: IQuestion[],
  totalQuestions: number,
  handleOnAnswer: (arg1: boolean, arg2: number) => void,
  handleJumpToQuestion: (arg1: number) => void,
  answered: boolean,
  answers: any, // this needs to be boolean[] but there is an issues with TS and initial never[] state.
}

function QuizPage({
  questions,
  totalQuestions,
  handleOnAnswer,
  handleJumpToQuestion,
  answered,
  answers,
}: IQuizPageProps) {
  const { questionId } = useParams();
  const currentQuestion = questionId ? parseInt(questionId, 10) : 0;
  const nextQuestion = currentQuestion + 1;
  const question = questions[currentQuestion - 1];

  return (
    <React.Fragment>
      <ProgressBar percentage={currentQuestion / totalQuestions * 100} />
      <div className="QuizPage-question-section">
        <h1>{question.category || 'N/A'}</h1>
        <h3>{decodeHtml(question.question)}</h3>
      </div>
      <div className="QuizPage-button-answers-section">
        <ButtonAnswer
          answerValue="true"
          handleOnClick={() => handleOnAnswer('True' === question.correct_answer, nextQuestion)}
          disabled={answered}
        />
        <ButtonAnswer
          answerValue="false"
          handleOnClick={() => handleOnAnswer('False' === question.correct_answer, nextQuestion)}
          disabled={answered}
        />
      </div>
      <Pagination
        totalPages={totalQuestions}
        totalClickable={answers ? answers.length + 1 : 0}
        handlePageClick={handleJumpToQuestion}
      />
      <StatusText
        statusNotice=""
        firstValue={currentQuestion}
        secondValue={totalQuestions}
        small={true}
      />
    </React.Fragment>
  );
}

export default QuizPage;
