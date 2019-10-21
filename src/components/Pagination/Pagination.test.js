import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

it('renders without crashing - no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pagination />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - all props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pagination totalPages={10} totalClickable={5} handlePageClick={() => undefined} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
