import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../src/components/Contact.jsx';

test('renders Contact form', () => {
  render(<Contact />);

  // Check if form elements are present
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Subject')).toBeInTheDocument();
  expect(screen.getByLabelText('Message')).toBeInTheDocument();
  expect(screen.getByText('Send')).toBeInTheDocument();
});

test('updates form state on user input', () => {
  render(<Contact />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test Message' } });

  // Check if form state is updated
  expect(screen.getByLabelText('Name')).toHaveValue('John Doe');
  expect(screen.getByLabelText('Email')).toHaveValue('john@example.com');
  expect(screen.getByLabelText('Subject')).toHaveValue('Test Subject');
  expect(screen.getByLabelText('Message')).toHaveValue('Test Message');
});

// You can add more tests to cover other form interactions...
