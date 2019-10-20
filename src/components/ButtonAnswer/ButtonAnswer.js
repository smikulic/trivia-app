import React from 'react';
import './ButtonAnswer.css';

function ButtonAnswer({ answerValue, handleOnClick }) {
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
