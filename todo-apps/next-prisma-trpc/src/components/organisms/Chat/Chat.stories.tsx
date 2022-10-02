import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chat } from './Chat';

export default {
  title: 'components/molecules/Chat',
  component: Chat,
  argTypes: {
    teacher: {},
  },
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => (
  <div className="w-1/2">
    <Chat {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  teacher: {
    name: 'James',
  },
};
