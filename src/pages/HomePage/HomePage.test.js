import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import HomePage from './HomePage';

it('renders without crashing - no props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - all props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage handleOnStart={() => undefined} loading={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly - loading state', () => {
  const tree = renderer
    .create(<HomePage handleOnStart={() => undefined} loading={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly - loaded state', () => {
  const tree = renderer
    .create(<HomePage handleOnStart={() => undefined} loading={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
