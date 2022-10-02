import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChatMessage } from './ChatMessage';

export default {
  title: 'components/atoms/ChatMessage',
  component: ChatMessage,
  argTypes: {},
} as ComponentMeta<typeof ChatMessage>;

const Template: ComponentStory<typeof ChatMessage> = (args) => (
  <div className="w-1/2">
    <ChatMessage {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isMe: false,
};

export const IsMe = Template.bind({});
IsMe.args = {
  isMe: true,
};
