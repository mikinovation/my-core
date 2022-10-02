import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TeacherList } from './TeacherList';

export default {
  title: 'components/molecules/TeacherList',
  component: TeacherList,
  argTypes: {},
} as ComponentMeta<typeof TeacherList>;

const Template: ComponentStory<typeof TeacherList> = (args) => (
  <div className="w-1/2">
    <TeacherList {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  teacher: {
    name: 'James',
  },
};
