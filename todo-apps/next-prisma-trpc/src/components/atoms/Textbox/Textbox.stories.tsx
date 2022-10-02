import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textbox } from './Textbox';
import { TEXTBOX_BORDER_COLOR } from './Textbox';

export default {
  title: 'components/atoms/Textbox',
  component: Textbox,
  argTypes: {
    borderColor: {
      options: Object.values(TEXTBOX_BORDER_COLOR),
      control: { type: 'select' },
    },
    placeholder: { control: 'text' },
  },
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => (
  <Textbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: '氏名を入力してください',
  borderColor: TEXTBOX_BORDER_COLOR.INFO,
};
