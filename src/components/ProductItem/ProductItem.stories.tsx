import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductItem from './ProductItem';

export default {
  title: 'ProductItem',
  component: ProductItem
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = args => (
  <ProductItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  product: { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  inCart: false,
  onAdd: () => {},
  onRemove: () => {}
};

export const InCart = Template.bind({});
InCart.args = {
  product: { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  inCart: true,
  onAdd: () => {},
  onRemove: () => {}
};
