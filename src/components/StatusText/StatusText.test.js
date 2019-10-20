import React from 'react';
import ReactDOM from 'react-dom';
import StatusText from './StatusText';

it('renders without crashing - no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusText />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - all props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusText statusNotice="statusNotice" firstValue="firstValue" secondValue="secondValue" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
