import React from 'react';
import './HomePage.css';

function HomePage({ handleOnStart, loading }) {
  return (
    <React.Fragment>
        { loading && (
          <React.Fragment>Loading the quiz...</React.Fragment>
        )}
        { !loading && (
          <React.Fragment>
            <h1>Welcome to the Trivia Challenge!</h1>
            <p>You will be presented with 10 True or False questions.</p>
            <p>Can you score 100%?</p>
            <div
              className="start-link"
              onClick={() => handleOnStart()}
            >
              Begin
            </div>
          </React.Fragment>
        )}
    </React.Fragment>
  );
}

export default HomePage;
