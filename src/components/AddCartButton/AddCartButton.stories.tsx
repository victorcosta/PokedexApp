import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import AddCartButton, {AddCartButtonTypes} from './AddCartButton'; // ajuste o caminho conforme necessário

const meta: Meta = {
  title: 'AddCartButton',
  component: AddCartButton,
  decorators: [withKnobs],
};

export default meta;

type Story = StoryObj<typeof AddCartButton>;

export const Default: Story = {
  args: {
    type: AddCartButtonTypes.Add,
    onPress: action('Add to Cart'),
  },
  render: (args) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height: 200}}>
        <AddCartButton {...args} />
      </View>
    </View>
  ),
};
export const Secondary: Story = {
  args: {
    type: AddCartButtonTypes.Remove,
    onPress: action('Remove to Cart'),
  },
  render: (args) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height: 200}}>
        <AddCartButton {...args} />
      </View>
    </View>
  ),
};
