import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductList from './ProductList';

export default {
  title: 'ProductList',
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: [
    { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ],
  cart: [],
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
};

export const WithProductsInCart = Template.bind({});
WithProductsInCart.args = {
  products: [
    { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ],
  cart: [
    { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  ],
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
};
