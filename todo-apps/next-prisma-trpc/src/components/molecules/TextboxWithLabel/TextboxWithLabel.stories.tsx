import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextboxWithLabel } from './TextboxWithLabel';

export default {
  title: 'components/molecules/TextboxWithLabel',
  component: TextboxWithLabel,
  argTypes: {
    labelProps: {
      title: { control: 'text' },
    },
  },
} as ComponentMeta<typeof TextboxWithLabel>;

const Template: ComponentStory<typeof TextboxWithLabel> = (args) => (
  <TextboxWithLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelProps: {
    title: '氏名',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  labelProps: {
    title: '氏名',
  },
  error: '氏名を入力してください',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  labelProps: {
    title: '氏名',
  },
  description: '氏名は100文字以内で入力してください',
};

export const WithFullProps = Template.bind({});
WithFullProps.args = {
  labelProps: {
    title: '氏名',
  },
  description: '氏名は100文字以内で入力してください',
  error: '氏名を入力してください',
};
