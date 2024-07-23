import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider, useCart, CartProviderProps } from './CartContext';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

const wrapper = ({ children }: CartProviderProps) => (
  <CartProvider>{children}</CartProvider>
);

const TestComponent: React.FC = () => {
  const { cart } = useCart();
  return <Text>{cart.length}</Text>;
};

describe('CartContext', () => {
  it('Should provide cart context values', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.cart).toEqual([]);
    expect(typeof result.current.addToCart).toBe('function');
    expect(typeof result.current.removeFromCart).toBe('function');
  });

  it('Should add product to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = {
      name: 'Bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    };

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cart).toEqual([product]);
  });

  it('Should remove product from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = {
      name: 'Bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    };

    act(() => {
      result.current.addToCart(product);
    });

    act(() => {
      result.current.removeFromCart(product);
    });

    expect(result.current.cart).toEqual([]);
  });

  it('Should throw an error when useCart is used outside of CartProvider', () => {
    const renderWithoutCartProvider = () => {
      render(<TestComponent />);
    };

    expect(renderWithoutCartProvider).toThrowError(
      'useCart must be used within a CartProvider'
    );
  });
});
