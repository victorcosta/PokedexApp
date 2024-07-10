import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CartItem from './CartItem'; // ajuste o caminho conforme necessário

const meta: Meta = {
  title: 'CartItem',
  component: CartItem,
  decorators: [withKnobs],
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    product: {
      name: text('Product Name', 'Pikachu'),
      url: text('Product URL', 'https://pokeapi.co/api/v2/pokemon/25/'),
    },
    removeFromCart: action('Remove From Cart'),
  },
  render: (args) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height: 200}}>
        <CartItem {...args} />
      </View>
    </View>
  ),
};
