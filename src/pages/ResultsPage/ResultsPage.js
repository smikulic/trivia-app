import React from 'react';
import { Link } from "react-router-dom";
import './ResultsPage.css';

function ResultsPage() {
  return (
    <div className="ResultsPage">
      <header className="ResultsPage-header">
        <h1>
          Welcome to the Results!
        </h1>
        <Link
          className="ResultsPage-link"
          to="/quiz/step/1"
        >
          Try again
        </Link>
      </header>
    </div>
  );
}

export default ResultsPage;
