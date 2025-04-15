import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo', () => {
  test('Renders todo component', () => {
    render(<Todo />);
    expect(screen.getByText('This is an extracted todo')).toBeDefined;
  });
});
