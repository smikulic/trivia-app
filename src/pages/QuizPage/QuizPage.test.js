import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import QuizPage from './QuizPage';

const questionsMock = [
  { question: 'question1?', category: 'category1' },
  { question: 'question2?', category: 'category2' },
]

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    questionId: '1',
  }),
}));

it('renders without crashing - all props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuizPage questions={questionsMock} totalQuestions={10} handleOnAnswer={() => undefined} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<QuizPage questions={questionsMock} totalQuestions={10} handleOnAnswer={() => undefined} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
