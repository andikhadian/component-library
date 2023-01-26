import React from 'react';
import { Button } from '../buttons/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hello gaes</Button>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
