import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const container = render(<App />)
});

test('ensure nav is there', () => {
  const container = render(<App />)
  container.getByText('Women\'s World Cup Stats')
})