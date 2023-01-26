import styled from 'styled-components';
import { StyledInput } from '../Input/styles';
import { TextareaProps } from './Textarea';

export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<TextareaProps>`
  resize: ${(p) => !p.isResizable && 'none'};
`;
