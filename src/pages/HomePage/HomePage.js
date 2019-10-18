import React from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
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
        <Link
          className="HomePage-link"
          to="/quiz/step/1"
        >
          Begin
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
