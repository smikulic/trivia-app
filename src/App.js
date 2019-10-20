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
import { getQuestionsData } from './utils/api';

const TOTAL_QUESTIONS = 10

function App() {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleOnStart = () => {
    setLoading(true);

    getQuestionsData({
      amount: TOTAL_QUESTIONS,
      onSuccess: (data) => {
        setQuestions(data)
        setLoading(false)
        history.push('/quiz/question/1')
      },
    })
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
  
  const handleOnRestart = () => {
    history.push('/');
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        <Switch>
          <Route path="/quiz/question/:questionId">
            <QuizPage questions={questions} totalQuestions={TOTAL_QUESTIONS} handleOnAnswer={handleOnAnswer} />
          </Route>
          <Route path="/quiz/results">
            <ResultsPage questions={questions} totalQuestions={TOTAL_QUESTIONS} answers={answers} handleOnRestart={handleOnRestart} />
          </Route>
          <Route path="/">
            <HomePage handleOnStart={handleOnStart} loading={loading} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
