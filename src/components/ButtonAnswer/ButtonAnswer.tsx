import React from 'react';
import './ButtonAnswer.css';

interface IButtonAnswerProps {
  answerValue: string,
  handleOnClick: () => void,
}

function ButtonAnswer({ answerValue, handleOnClick }: IButtonAnswerProps) {
  return (
    <div
      className={`button-answer ${answerValue}`}
      onClick={handleOnClick}
    >
      {answerValue}
    </div>
  );
}

export default ButtonAnswer;
