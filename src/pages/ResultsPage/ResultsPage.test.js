import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ResultsPage from './ResultsPage';

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
  ReactDOM.render(<ResultsPage questions={questionsMock} totalQuestions={10} answers={[true, false]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<ResultsPage questions={questionsMock} totalQuestions={10} answers={[true, false]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
