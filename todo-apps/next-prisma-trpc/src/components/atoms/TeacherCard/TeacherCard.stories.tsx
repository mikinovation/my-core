import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TeacherCard } from './TeacherCard';

export default {
  title: 'components/atoms/TeacherCard',
  component: TeacherCard,
  argTypes: {
    teacher: {},
  },
} as ComponentMeta<typeof TeacherCard>;

const Template: ComponentStory<typeof TeacherCard> = (args) => (
  <div className="w-1/2">
    <TeacherCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  teacher: {
    name: 'James',
  },
};
