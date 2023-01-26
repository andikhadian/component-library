import React, { PropsWithChildren } from 'react';
import { useUniqueID } from '../hooks/useUniqueID';
import { FieldContext } from './FieldContext';
import { Input } from './Input';
import { Label } from './Label/Label';
import { TextArea } from './Textarea/Textarea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof TextArea;
}

export const Field: React.FC<PropsWithChildren> & FieldComposition = ({
  children,
}) => {
  const id = useUniqueID();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = TextArea;
