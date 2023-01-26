import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Field } from '../fields/Field';

export default {
  title: 'Components/Input',
  component: Field.Input,
  args: {},
  argTypes: {
    type: {
      options: ['text', 'email', 'number'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Field.Input>;

const Template: ComponentStory<typeof Field.Input> = (args) => (
  <Field>
    <Field.Label>Hello</Field.Label>
    <Field.Input {...args} />
  </Field>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder content',
  type: 'text',
  disabled: false,
};
