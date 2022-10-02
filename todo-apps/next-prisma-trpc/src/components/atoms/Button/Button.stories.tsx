import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { BUTTON_COLOR, BUTTON_SIZE } from './Button.const';

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: Object.values(BUTTON_COLOR),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(BUTTON_SIZE),
      control: { type: 'select' },
    },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'ボタン',
};
