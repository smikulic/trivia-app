import React, { useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

const TOTAL_QUESTIONS = 10

function App() {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleOnStart = () => {
    setLoading(true);

    fetch(`https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}&difficulty=hard&type=boolean`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results)
        setLoading(false)
      })
      .then(() => history.push("/quiz/question/1"))
  }
  
  const handleOnAnswer = (answer, nextQuestion) => {
    let clonedAnswers = [...answers];
    clonedAnswers.push(answer);
    
    setAnswers(clonedAnswers)

    if (nextQuestion > TOTAL_QUESTIONS) {
      history.push('/quiz/results')
    } else {
      history.push(`/quiz/question/${nextQuestion}`)
    }
  }

  return (
    <Switch>
      <Route path="/quiz/question/:questionId">
        <QuizPage questions={questions} totalQuestions={TOTAL_QUESTIONS} handleOnAnswer={handleOnAnswer} />
      </Route>
      <Route path="/quiz/results">
        <ResultsPage questions={questions} totalQuestions={TOTAL_QUESTIONS} answers={answers} />
      </Route>
      <Route path="/">
        <HomePage handleOnStart={handleOnStart} loading={loading} />
      </Route>
    </Switch>
  );
}

export default App;
