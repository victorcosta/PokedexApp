import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductItem from '../src/components/ProductItem/ProductItem';

test('renders correctly and can add/remove item', () => {
  const product = { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };
  const onAdd = jest.fn();
  const onRemove = jest.fn();

  const { getByText, rerender } = render(
    <ProductItem product={product} inCart={false} onAdd={onAdd} onRemove={onRemove} />
  );

  // Check initial render
  expect(getByText('bulbasaur')).toBeTruthy();
  fireEvent.press(getByText('Add to Cart'));
  expect(onAdd).toHaveBeenCalled();

  // Rerender with inCart true
  rerender(<ProductItem product={product} inCart={true} onAdd={onAdd} onRemove={onRemove} />);
  fireEvent.press(getByText('Remove from Cart'));
  expect(onRemove).toHaveBeenCalled();
});
