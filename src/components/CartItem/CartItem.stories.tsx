import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartItem from './CartItem';

export default {
  title: 'CartItem',
  component: CartItem
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = args => (
  <CartItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  product: { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  removeFromCart: () => {}
};
