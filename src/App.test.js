import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Test from "./Test";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const { getTest } = render(<Test />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
