import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import { StyledTextarea } from './styles';

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <StyledTextarea ref={ref} id={id} isResizable={isResizable} {...props} />
    );
  }
);

TextArea.displayName = 'Field.TextArea';

TextArea.defaultProps = {
  isResizable: true,
};

TextArea.propTypes = {
  isResizable: PropTypes.bool,
};
