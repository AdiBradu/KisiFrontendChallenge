import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
// components
import { Title } from '../components/Title/Title';
import { Button } from '../components/Button/Button';

describe('Title', () => {
  test('renders prop correctly', () => {
    render(<Title text="Connect people & spaces" />);
    const title = screen.getByText('Connect people & spaces');
    expect(title).toBeInTheDocument();
  });
});

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button onClick={() => console.log('click')} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
