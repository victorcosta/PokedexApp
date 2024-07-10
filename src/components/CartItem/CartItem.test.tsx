import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CartItem from './CartItem';

const product = { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };
const removeFromCart = jest.fn();

describe('CartItem Component', () => {
  it('shoud render CartItem correctly', () => {
    const { getByText, getByTestId } = render(
      <CartItem
        product={product}
        removeFromCart={removeFromCart}
      />
    );

    expect(getByText('Bulbasaur')).toBeTruthy();
    expect(getByTestId('itemImage')).toBeTruthy();
  });

  it('shoud call removeFromCart function when remove button is pressed', () => {
    const { getByTestId } = render(
      <CartItem
        product={product}
        removeFromCart={removeFromCart}
      />
    );

    fireEvent.press(getByTestId('itemRemove'));

    expect(removeFromCart).toHaveBeenCalledWith(product);
  });
});
