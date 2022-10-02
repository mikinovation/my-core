import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TeacherProfile } from './TeacherProfile';

export default {
  title: 'components/atoms/TeacherProfile',
  component: TeacherProfile,
  argTypes: {},
} as ComponentMeta<typeof TeacherProfile>;

const Template: ComponentStory<typeof TeacherProfile> = (args) => (
  <div className="w-1/2">
    <TeacherProfile {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  teacher: {
    name: 'Tom',
    image: 'https://placeimg.com/192/192/people',
  },
  courses: [
    {
      name: 'Course1',
      description:
        'Description1Description1Description1Description1Description1Description1Description1',
    },
    {
      name: 'Course2',
      description:
        'Description2Description2Description2Description2Description2Description2Description2',
    },
  ],
};
