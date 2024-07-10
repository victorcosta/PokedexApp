import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ProductItem from './ProductItem'; // ajuste o caminho conforme necessário

const meta: Meta = {
  title: 'ProductItem',
  component: ProductItem,
  decorators: [withKnobs],
};

export default meta;

type Story = StoryObj<typeof ProductItem>;

export const Default: Story = {
  args: {
    product: {
      name: text('Product Name', 'Pikachu'),
      url: text('Product URL', 'https://pokeapi.co/api/v2/pokemon/25/'),
    },
    inCart: false,
    onAdd: action('Add to Cart'),
    onRemove: action('Remove from Cart'),
  },
  render: (args) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height: 200}}>
        <ProductItem {...args} />
      </View>
    </View>
  ),
};
export const Secondary: Story = {
  args: {
    product: {
      name: text('Product Name', 'Pikachu'),
      url: text('Product URL', 'https://pokeapi.co/api/v2/pokemon/25/'),
    },
    inCart: true,
    onAdd: action('Add to Cart'),
    onRemove: action('Remove from Cart'),
  },
  render: (args) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height: 200}}>
        <ProductItem {...args} />
      </View>
    </View>
  ),
};