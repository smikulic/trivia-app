import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAnswer from './ButtonAnswer';

it('renders without crashing - no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonAnswer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - all props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonAnswer answerValue="answerValue" handleOnClick={() => undefined} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
