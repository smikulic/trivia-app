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
  const [answered, setAnswered] = useState(false);
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
    const isFinalQuestion = nextQuestion > TOTAL_QUESTIONS;
    
    clonedAnswers.push(answer);
    
    setAnswers(clonedAnswers)

    history.push(isFinalQuestion ? '/quiz/results' : `/quiz/question/${nextQuestion}`);
  }
  
  const handleJumpToQuestion = (question) => {
    const isQuestionAnswered = question <= answers.length;

    setAnswered(isQuestionAnswered)

    history.push(`/quiz/question/${question}`);
  }
  
  const handleOnRestart = () => {
    setAnswers([])
    setAnswered(false)
    history.push('/');
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        <Switch>
          <Route path="/quiz/question/:questionId">
            <QuizPage
              questions={questions}
              totalQuestions={TOTAL_QUESTIONS}
              handleOnAnswer={handleOnAnswer}
              handleJumpToQuestion={handleJumpToQuestion}
              answered={answered}
              answers={answers}
            />
          </Route>
          <Route path="/quiz/results">
            <ResultsPage
              questions={questions}
              totalQuestions={TOTAL_QUESTIONS}
              answers={answers}
              handleOnRestart={handleOnRestart}
            />
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
