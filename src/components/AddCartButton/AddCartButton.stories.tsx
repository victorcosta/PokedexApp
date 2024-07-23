import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCartButton, { AddCartButtonTypes } from './AddCartButton';

export default {
  title: 'AddCartButton',
  component: AddCartButton
} as ComponentMeta<typeof AddCartButton>;

const Template: ComponentStory<typeof AddCartButton> = args => (
  <AddCartButton {...args} />
);

export const Add = Template.bind({});
Add.args = {
  type: AddCartButtonTypes.Add,
  onPress: () => {}
};

export const Remove = Template.bind({});
Remove.args = {
  type: AddCartButtonTypes.Remove,
  onPress: () => {}
};
