import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ProductList from './ProductList'; // ajuste o caminho conforme necessário

const meta: Meta = {
  title: 'ProductList',
  component: ProductList,
  decorators: [withKnobs],
};

export default meta;

type Story = StoryObj<typeof ProductList>;


export const Default: Story = {
  args: {
    products: [
      {
        name: text('Product Name', 'Pikachu'),
        url: text('Product URL', 'https://pokeapi.co/api/v2/pokemon/25/'),
      },
      {
        name: text('Product Name', 'Pikachu'),
        url: text('Product URL', 'https://pokeapi.co/api/v2/pokemon/25/'),
      },
    ],
    cart: [],
    onAddToCart: action('Add to Cart'),
    onRemoveFromCart: action('Remove from Cart'),
    
  },
  render: (args) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProductList {...args} />
    </View>
  ),
};