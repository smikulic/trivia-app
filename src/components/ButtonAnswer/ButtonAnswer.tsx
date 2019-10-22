import React from 'react';
import './ButtonAnswer.css';

interface IButtonAnswerProps {
  answerValue: string,
  disabled?: boolean,
  handleOnClick: () => void,
}

function ButtonAnswer({ answerValue, handleOnClick, disabled }: IButtonAnswerProps) {
  let buttonClassName = `button-answer ${answerValue}`;
  buttonClassName += disabled ? ' disabled' : '';

  return (
    <div
      className={buttonClassName}
      onClick={disabled ? undefined : handleOnClick}
    >
      {answerValue}
    </div>
  );
}

export default ButtonAnswer;
