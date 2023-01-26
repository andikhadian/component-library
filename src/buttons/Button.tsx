import React from 'react';

type Props = React.ComponentPropsWithoutRef<'button'>;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} type="button" {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
