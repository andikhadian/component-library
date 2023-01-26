import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should applies default type of button', () => {
    render(<Button>Hello button</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
  it('should applies specific type if provided', () => {
    render(<Button type="submit">Hello submit</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
  it('should applies valid attribute to element', () => {
    render(<Button disabled>Hello disabled</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
