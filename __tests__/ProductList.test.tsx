import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductList from '../src/components/ProductList/ProductList';

test('renders product list and handles add/remove from cart', () => {
  const products = [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }];
  const cart: { name: string; url: string; }[] = [];
  const onAddToCart = jest.fn();
  const onRemoveFromCart = jest.fn();

  const { getByText } = render(
    <ProductList
      products={products}
      cart={cart}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  );

  fireEvent.press(getByText('Add to Cart'));
  expect(onAddToCart).toHaveBeenCalledWith(products[0]);
});
