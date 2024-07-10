import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useCart } from '../../context/CartContext';
import CartScreen from './CartScreen';

jest.mock('../../context/CartContext');

const mockCart = {
  cart: [],
  removeFromCart: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
  (useCart as jest.Mock).mockReturnValue(mockCart);
});

test('renders empty cart message', () => {
  const { getByText } = render(
    <NavigationContainer>
      <CartScreen />
    </NavigationContainer>
  );

  expect(getByText('The cart is empty!')).toBeTruthy();
});

test('renders cart items correctly', () => {
  const cart = [
    { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ];
  (useCart as jest.Mock).mockReturnValue({
    ...mockCart,
    cart,
  });

  const { getByText } = render(
    <NavigationContainer>
      <CartScreen />
    </NavigationContainer>
  );

  expect(getByText('Bulbasaur')).toBeTruthy();
  expect(getByText('Ivysaur')).toBeTruthy();
});
