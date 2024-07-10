import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider, useCart, CartProviderProps } from './CartContext';

const wrapper = ({ children }:CartProviderProps) => <CartProvider>{children}</CartProvider>;

describe('CartContext', () => {
  
  test('Shoud provides cart context values', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.cart).toEqual([]);
    expect(typeof result.current.addToCart).toBe('function');
    expect(typeof result.current.removeFromCart).toBe('function');
  });

  test('Shoud add product to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cart).toEqual([product]);
  });

  test('Shoud remove product from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };

    act(() => {
      result.current.addToCart(product);
    });

    act(() => {
      result.current.removeFromCart(product);
    });

    expect(result.current.cart).toEqual([]);
  });
});
