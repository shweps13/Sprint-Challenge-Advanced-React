import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import nock from 'nock';
import waitUntil from 'async-wait-until';
import { shallow } from 'enzyme';

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

test('Component fetching data from API', async () => {
  nock('http://localhost:5000/')
  .get('/api/players')
  .reply(200);
});