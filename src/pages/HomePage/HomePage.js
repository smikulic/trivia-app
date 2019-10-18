import React from 'react';
import './HomePage.css';

function HomePage({ handleOnStart, loading }) {
  return (
    <div className="HomePage">
      { loading && (
        <header className="HomePage-header">
          Loading the quiz...
        </header>
      )}
      { !loading && (
        <header className="HomePage-header">
          <h1>
            Welcome to the Trivia Challenge!
          </h1>
          <p>
            You will be presented with 10 True or False questions.
          </p>
          <p>
            Can you score 100%?
          </p>
          <div
            className="HomePage-link"
            onClick={() => handleOnStart()}
          >
            Begin
          </div>
        </header>
      )}
    </div>
  );
}

export default HomePage;
