import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz/step/:stepId">
          <QuizPage lastStep={10} />
        </Route>
        <Route path="/quiz/results">
          <ResultsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
