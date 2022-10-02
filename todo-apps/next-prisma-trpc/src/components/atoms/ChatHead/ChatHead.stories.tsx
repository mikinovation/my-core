import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChatHead } from './ChatHead';

export default {
  title: 'components/atoms/ChatHead',
  component: ChatHead,
  argTypes: {
    teacher: {},
  },
} as ComponentMeta<typeof ChatHead>;

const Template: ComponentStory<typeof ChatHead> = (args) => (
  <div className="w-1/2">
    <ChatHead {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
