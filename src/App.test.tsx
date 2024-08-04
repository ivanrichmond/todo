import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * This is an extremely basic smoke test.
 * Passing is not meant to indicate that the app is working,
 * so much as failing indicates that the app doesn't even render.
 */
test('renders to do', () => {
  render(<App />);
  const testText = screen.getByText(/to do/i);
  expect(testText).toBeInTheDocument();
});
