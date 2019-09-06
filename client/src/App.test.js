import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains main header sign', () => {
  const { getByText } = render(<App />)
  getByText(/women's world cup/i);
});

test('contains header sign', () => {
  const { getByText } = render(<App />)
  getByText(/players list/i);
});

// test('contains first and last names in array', () => {
//   const { getAllByText } = render(<App />);
//   getAllByText(/alex morgan/i, /tierna davidson/i);
// });