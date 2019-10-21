import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './ProgressBar';

it('renders without crashing - no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - all props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar percentage={50} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
