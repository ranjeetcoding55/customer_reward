// src/_test/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import CustomerReward from '../components/CustomerReward';

// Mock the CustomerReward component
jest.mock('../components/CustomerReward', () => () => <div>CustomerReward Component</div>);

test('renders the CustomerReward component', () => {
  render(<App />);
  expect(screen.getByText(/CustomerReward Component/i)).toBeInTheDocument();
});
