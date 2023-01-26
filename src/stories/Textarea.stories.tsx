import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Field } from '../fields/Field';

export default {
  title: 'Components/Textarea',
  component: Field.Textarea,
  args: {},
} as ComponentMeta<typeof Field.Textarea>;

const Template: ComponentStory<typeof Field.Textarea> = (args) => (
  <Field>
    <Field.Label>TextArea</Field.Label>
    <Field.Textarea {...args} />
  </Field>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Olaa',
  disabled: false,
  isResizable: true,
};
